@echo off
setlocal
title Matrix Escape OS
cd /d "%~dp0"

echo.
echo   Matrix Escape OS — starting dev server
echo   Your default browser should open automatically.
echo   If it does not, go to: http://localhost:5173
echo   (If that port is busy, check this window for the real URL.)
echo   Press Ctrl+C to stop the server.
echo.

if not exist "package.json" (
  echo ERROR: package.json not found. Place RUN.bat in the project root.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo First run: installing dependencies...
  call npm install
  if errorlevel 1 (
    echo Install failed. Install Node.js LTS from https://nodejs.org/ then try again.
    pause
    exit /b 1
  )
  echo.
)

call npm run dev

echo.
pause
endlocal
