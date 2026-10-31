@echo off
title Sameh Reda Wahiba - AI Engineer Portfolio Launcher
echo ========================================================
echo   Sameh Reda Wahiba - Personal Portfolio Launcher
echo   Theme: Obsidian ^& Emerald Cyber-Tech Bento Grid
echo   Delta University for Science ^& Technology (DUST)
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/3] Verifying and copying assets...
call copy-assets.bat

echo.
echo [2/3] Checking Node.js dependencies...
if not exist "node_modules\" (
    echo node_modules not found. Running npm install...
    call npm install
) else (
    echo Dependencies are present.
)

echo.
echo [3/3] Starting development server on http://localhost:3001 ...
echo Press Ctrl+C in this window anytime to stop the server.
echo.
call npm run dev
pause
