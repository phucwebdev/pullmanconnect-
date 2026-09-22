Add-Type -AssemblyName System.Drawing

$src = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\15bc1db9-8067-4f1c-9a4c-8ea142ba1980\media__1786331373429.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

# Precise logo box at top left
$x = 22
$y = 20
$w = 175
$h = 42

$rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
$crop = $bmp.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Save high quality
$dest = "c:\Users\ADMIN\Downloads\PULLMAN CONNECT\assets\images\pullman-logo.png"
$crop.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)

# Also crop footer logo at bottom left (around y = 920)
$footerX = 26
$footerY = 918
$footerW = 160
$footerH = 40
$rectFooter = New-Object System.Drawing.Rectangle($footerX, $footerY, $footerW, $footerH)
$cropFooter = $bmp.Clone($rectFooter, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$cropFooter.Save("c:\Users\ADMIN\Downloads\PULLMAN CONNECT\assets\images\pullman-logo-footer.png", [System.Drawing.Imaging.ImageFormat]::Png)

$crop.Dispose()
$cropFooter.Dispose()
$bmp.Dispose()
Write-Host "Logo successfully extracted"
