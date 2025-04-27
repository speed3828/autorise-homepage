# Windows ZIP Archive Script for deployment
# Creates a timestamped ZIP archive of the project for deployment

$timestamp = Get-Date -Format "yyyyMMddHHmm"
$archiveDir = "archive"
$zipName = "${timestamp}_dist.zip"
$zipPath = Join-Path $archiveDir $zipName

# Create archive directory if it doesn't exist
if (-not (Test-Path $archiveDir)) {
    New-Item -ItemType Directory -Force -Path $archiveDir
}

# Define directories and files to exclude
$excludeDirs = @(
    ".git", 
    "node_modules", 
    ".next", 
    "archive"
)

# Create a temporary directory for the files to zip
$tempDir = "temp_archive"
if (Test-Path $tempDir) {
    Remove-Item -Path $tempDir -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $tempDir

# Copy files to the temporary directory, excluding the specified directories
Get-ChildItem -Path "." -Exclude $excludeDirs | ForEach-Object {
    $destination = Join-Path $tempDir $_.Name
    if ($_.PSIsContainer) {
        Copy-Item -Path $_.FullName -Destination $destination -Recurse
    } else {
        Copy-Item -Path $_.FullName -Destination $destination
    }
}

# Create the ZIP file
Write-Host "Creating ZIP archive: $zipPath"
Compress-Archive -Path "$tempDir\*" -DestinationPath $zipPath -Force

# Clean up the temporary directory
Remove-Item -Path $tempDir -Recurse -Force

Write-Host "ZIP archive created successfully: $zipPath" 