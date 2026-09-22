Add-Type -AssemblyName System.Drawing

$enhancedPath = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\15bc1db9-8067-4f1c-9a4c-8ea142ba1980\pullman_official_logo_enhanced_1786332096827.png"
$userPath = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\15bc1db9-8067-4f1c-9a4c-8ea142ba1980\media__1786332028339.png"

# Copy enhanced AI logo as primary pullman-logo.png
Copy-Item $enhancedPath -Destination "c:\Users\ADMIN\Downloads\PULLMAN CONNECT\assets\images\pullman-logo.png" -Force

# Create high-res version of the exact user upload
$origBmp = [System.Drawing.Bitmap]::FromFile($userPath)
$newW = $origBmp.Width * 4
$newH = $origBmp.Height * 4
$targetBmp = New-Object System.Drawing.Bitmap($newW, $newH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($targetBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($origBmp, 0, 0, $newW, $newH)
$g.Dispose()
$origBmp.Dispose()

$targetBmp.Save("c:\Users\ADMIN\Downloads\PULLMAN CONNECT\assets\images\pullman-logo-original-hd.png", [System.Drawing.Imaging.ImageFormat]::Png)
$targetBmp.Dispose()

Write-Host "Both HD logos saved successfully"
