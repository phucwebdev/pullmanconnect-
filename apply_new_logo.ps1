Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\15bc1db9-8067-4f1c-9a4c-8ea142ba1980\media__1786334039158.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Uploaded logo dimensions: $($bmp.Width) x $($bmp.Height)"

# Tight bounding box scan
$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Non-white pixels (threshold < 250)
        if ($c.R -lt 250 -or $c.G -lt 250 -or $c.B -lt 250) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

# Add 4px padding
$minX = [Math]::Max(0, $minX - 4)
$minY = [Math]::Max(0, $minY - 4)
$maxX = [Math]::Min($bmp.Width - 1, $maxX + 4)
$maxY = [Math]::Min($bmp.Height - 1, $maxY + 4)

$cropW = $maxX - $minX + 1
$cropH = $maxY - $minY + 1

Write-Host "Tight bbox: x=$minX, y=$minY, w=$cropW, h=$cropH"

$cropRect = New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)
$croppedBmp = $bmp.Clone($cropRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Save high-res cropped logo directly
$destPath = "c:\Users\ADMIN\Downloads\PULLMAN CONNECT\assets\images\pullman-logo.png"
$croppedBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$destPathHd = "c:\Users\ADMIN\Downloads\PULLMAN CONNECT\assets\images\pullman-logo-hd.png"
$croppedBmp.Save($destPathHd, [System.Drawing.Imaging.ImageFormat]::Png)

$croppedBmp.Dispose()
$bmp.Dispose()

Write-Host "Ultra-sharp logo successfully applied to $destPath"
