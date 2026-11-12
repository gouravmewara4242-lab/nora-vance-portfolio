param(
  [int]$Port = 3000,
  [string]$Root = $PSScriptRoot
)

if (-not $Root) { $Root = (Get-Location).Path }

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".png"  = "image/png"
  ".svg"  = "image/svg+xml"
  ".webp" = "image/webp"
  ".ico"  = "image/x-icon"
  ".mp4"  = "video/mp4"
  ".webm" = "video/webm"
  ".mov"  = "video/quicktime"
}

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Output "Portfolio dev server running at $prefix (serving $Root)"

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $reqPath = $ctx.Request.Url.AbsolutePath.TrimStart('/')

    # POST API: Save Showreel Video Directly to Device Disk (assets/images/showreel.mp4)
    if ($ctx.Request.HttpMethod -eq "POST" -and $reqPath -eq "api/upload-showreel") {
      try {
        $destDir = Join-Path $Root "assets\images"
        if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
        $destPath = Join-Path $destDir "showreel.mp4"
        $fs = [System.IO.File]::Create($destPath)
        $ctx.Request.InputStream.CopyTo($fs)
        $fs.Close()
        $ctx.Response.StatusCode = 200
        $ctx.Response.ContentType = "application/json; charset=utf-8"
        $resBytes = [System.Text.Encoding]::UTF8.GetBytes('{"success":true,"url":"assets/images/showreel.mp4","message":"Showreel saved directly to device disk"}')
        $ctx.Response.OutputStream.Write($resBytes, 0, $resBytes.Length)
        $ctx.Response.Close()
      } catch {
        $ctx.Response.StatusCode = 500
        $errBytes = [System.Text.Encoding]::UTF8.GetBytes("Error saving to device: $($_.Exception.Message)")
        $ctx.Response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        $ctx.Response.Close()
      }
      continue
    }

    # POST API: Save Hero Portrait directly to Device Disk (assets/images/IMG_0433.jpg)
    if ($ctx.Request.HttpMethod -eq "POST" -and $reqPath -eq "api/upload-hero-portrait") {
      try {
        $destDir = Join-Path $Root "assets\images"
        if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
        $destPath = Join-Path $destDir "IMG_0433.jpg"
        $fs = [System.IO.File]::Create($destPath)
        $ctx.Request.InputStream.CopyTo($fs)
        $fs.Close()
        $ctx.Response.StatusCode = 200
        $ctx.Response.ContentType = "application/json; charset=utf-8"
        $resBytes = [System.Text.Encoding]::UTF8.GetBytes('{"success":true,"url":"assets/images/IMG_0433.jpg","message":"Hero portrait saved directly to device disk"}')
        $ctx.Response.OutputStream.Write($resBytes, 0, $resBytes.Length)
        $ctx.Response.Close()
      } catch {
        $ctx.Response.StatusCode = 500
        $errBytes = [System.Text.Encoding]::UTF8.GetBytes("Error saving hero portrait: $($_.Exception.Message)")
        $ctx.Response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        $ctx.Response.Close()
      }
      continue
    }

    if ([string]::IsNullOrWhiteSpace($reqPath)) { $reqPath = "index.html" }

    $safeRel = $reqPath -replace '/', '\'
    $fullPath = [System.IO.Path]::GetFullPath((Join-Path $Root $safeRel))
    $rootFull = [System.IO.Path]::GetFullPath($Root)

    if (-not $fullPath.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path $fullPath -PathType Leaf)) {
      $ctx.Response.StatusCode = 404
      $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      $ctx.Response.Close()
      continue
    }


    $ext = [System.IO.Path]::GetExtension($fullPath).ToLowerInvariant()
    $ctx.Response.ContentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
    $bytes = [System.IO.File]::ReadAllBytes($fullPath)
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $ctx.Response.Close()
  }
} finally {
  $listener.Stop()
  $listener.Close()
}
