# Servidor local mínimo para probar Explore Calafate.
# Necesario porque resenas.js y las fotos se cargan por http.
$puerto = 8124
$raiz = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$puerto/")
$listener.Start()
Write-Host "Sirviendo $raiz en http://localhost:$puerto  (Ctrl+C para cortar)"

$mime = @{
  ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8";
  ".js"="application/javascript; charset=utf-8"; ".json"="application/json";
  ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"; ".png"="image/png";
  ".svg"="image/svg+xml"; ".ico"="image/x-icon"
}

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $ruta = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart("/")
  if ([string]::IsNullOrEmpty($ruta)) { $ruta = "index.html" }
  $archivo = Join-Path $raiz $ruta
  if (Test-Path $archivo -PathType Leaf) {
    $ext = [IO.Path]::GetExtension($archivo).ToLower()
    $tipo = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" }
    $ctx.Response.StatusCode = 200
    $ctx.Response.ContentType = $tipo
    $bytes = [IO.File]::ReadAllBytes($archivo)
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $ctx.Response.StatusCode = 404
  }
  $ctx.Response.Close()
}
