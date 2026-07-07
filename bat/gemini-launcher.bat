@echo off
:: Gemini CLI Launcher for Windows
:: This script allows you to run Gemini CLI in a specific directory.

set "TARGET_DIR=%~1"

if "%TARGET_DIR%"=="" (
    set "TARGET_DIR=%cd%"
)

if not exist "%TARGET_DIR%" (
    echo Error: The directory "%TARGET_DIR%" does not exist.
    pause
    exit /b 1
)

echo Starting Gemini CLI in: %TARGET_DIR%
cd /d "%TARGET_DIR%"

:: Run the gemini command
:: Using 'call' to ensure the batch script continues if gemini is also a batch file
call gemini

if %ERRORLEVEL% neq 0 (
    echo.
    echo Gemini CLI exited with error code %ERRORLEVEL%.
    pause
)
