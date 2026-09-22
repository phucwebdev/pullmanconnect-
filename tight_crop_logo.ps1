Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\15bc1db9-8067-4f1c-9a4c-8ea142ba1980\media__1786332236794.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Raw size: $($bmp.Width) x $($bmp.Height)"

# Find tight bounding box of non-white pixels
$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Check if not pure white
        if ($c.R -lt 245 -or $c.G -lt 245 -or $c.B -lt 245) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

# Add 2px safety padding
$minX = [Math]::Max(0, $minX - 2)
$minY = [Math]::Max(0, $minY - 2)
$maxX = [Math]::Min($bmp.Width - 1, $maxX + 2)
$maxY = [Math]::Min($bmp.Height - 1, $maxY + 2)

$cropW = $maxX - $minX + 1
$cropH = $maxY - $minY + 1

Write-Host "Cropped bbox: x=$minX, y=$minY, w=$cropW, h=$cropH"

$cropRect = New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)
$croppedBmp = $bmp.Clone($cropRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Now upscale 4x with High Quality Bicubic
$scale = 4
$targetW = $cropW * $scale
$targetH = $cropH * $scale

$finalBmp = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($finalBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.Clear([System.Drawing.Color]::Transparent)

# Draw image
$g.DrawImage($croppedBmp, 0, 0, $targetW, $targetH)

$destPath = "c:\Users\ADMIN\Downloads\PULLMAN CONNECT\assets\images\pullman-logo.png"
$finalBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$finalBmp.Dispose()
$croppedBmp.Dispose()
$bmp.Dispose()

Write-Host "Tight cropped & 4x upscaled logo saved to $destPath"
