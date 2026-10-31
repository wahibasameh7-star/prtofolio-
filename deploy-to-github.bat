@echo off
title Push Sameh Wahiba Portfolio to GitHub
echo ========================================================
echo   Pushing Portfolio to GitHub:
echo   Repository: https://github.com/wahibasameh7-star/prtofolio-.git
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/5] Checking Git installation...
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in PATH!
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo [2/5] Initializing Git repository...
if not exist ".git\" (
    git init
)

echo.
echo [3/5] Configuring remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/wahibasameh7-star/prtofolio-.git

echo.
echo [4/5] Staging and committing files...
git branch -M main
git add .
git commit -m "Deploy Sameh Wahiba Cyber-Tech Portfolio with Applied AI and Data Analysis Projects"

echo.
echo [5/5] Pushing to GitHub (main branch)...
git push -u origin main

echo.
echo ========================================================
echo   Done! Repository pushed successfully.
echo.
echo   To activate your Live Website link on GitHub Pages:
echo   1. Open: https://github.com/wahibasameh7-star/prtofolio-/settings/pages
echo   2. Under 'Source', choose: 'GitHub Actions'
echo   3. The site will be live at:
echo      https://wahibasameh7-star.github.io/prtofolio-/
echo ========================================================
pause
