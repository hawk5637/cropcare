# CropCare GitHub Deployment Helper
param(
    [string]$RepoUrl = ""
)

$gitExe = 'C:\Users\samkn\AppData\Local\GitHubDesktop\app-3.6.6\resources\app\git\cmd\git.exe'
if (-not (Test-Path $gitExe)) {
    $found = Get-Command git -ErrorAction SilentlyContinue
    if ($found) { $gitExe = $found.Source }
}

Write-Host "🌾 CropCare GitHub Pages Publisher" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Gray

if (-not (Test-Path $gitExe)) {
    Write-Host "Error: Git executable not found. Please install Git or GitHub Desktop." -ForegroundColor Red
    exit 1
}

# Check if origin remote is configured
$hasOrigin = & $gitExe remote | Select-String "origin"
if (-not $hasOrigin) {
    if (-not $RepoUrl) {
        $RepoUrl = Read-Host "Enter your GitHub repository URL (e.g. https://github.com/hawk5637/cropcare.git)"
    }
    if ($RepoUrl) {
        & $gitExe remote add origin $RepoUrl
        Write-Host "Added origin remote: $RepoUrl" -ForegroundColor Cyan
    } else {
        Write-Host "No repository URL provided. Aborting." -ForegroundColor Yellow
        exit 1
    }
}

Write-Host "Building latest production bundle..." -ForegroundColor Cyan
npm run build

Write-Host "Staging and committing any updates..." -ForegroundColor Cyan
& $gitExe add .
& $gitExe commit -m "Update CropCare with working AI camera scanner, chatbot, and intro tour" -ErrorAction SilentlyContinue

Write-Host "Pushing to GitHub (main branch)..." -ForegroundColor Green
& $gitExe push -u origin main

Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "To view your public shareable site:" -ForegroundColor White
Write-Host "1. Go to your GitHub repository -> Settings -> Pages" -ForegroundColor Gray
Write-Host "2. Under 'Source', select 'GitHub Actions'" -ForegroundColor Gray
Write-Host "3. In 1 minute, your site will be live at: https://<your-username>.github.io/<repo-name>/" -ForegroundColor Cyan
