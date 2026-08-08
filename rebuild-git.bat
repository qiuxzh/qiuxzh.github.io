@echo off
setlocal
cd /d "%~dp0"

echo ============================================
echo   ??????????????? + ?? git
echo ============================================
echo.

echo [1/3] ?????? ...
if exist "%TEMP%\anzhiyu_backup_full" rmdir /s /q "%TEMP%\anzhiyu_backup_full"
if exist "%TEMP%\anzhiyu_moved" rmdir /s /q "%TEMP%\anzhiyu_moved"
if exist "%TEMP%\anzhiyu_theme_dir" rmdir /s /q "%TEMP%\anzhiyu_theme_dir"
if exist "%TEMP%\_gittest" rmdir /s /q "%TEMP%\_gittest"
if exist "%TEMP%\_gittest_git_moved" rmdir /s /q "%TEMP%\_gittest_git_moved"
if exist "%TEMP%\_move_test_target" rmdir /s /q "%TEMP%\_move_test_target"
if exist "%TEMP%\_subtree_test" rmdir /s /q "%TEMP%\_subtree_test"
if exist "%TEMP%\anzhiyu_local.diff" del /f /q "%TEMP%\anzhiyu_local.diff"
echo   ????????
echo.

echo [2/3] ??? git ???????? ...
if exist ".git" (
  echo   ?? .git
  rmdir /s /q ".git"
)
git init
git branch -M main
git config user.name "qiuxz"
git config user.email "qiuxzheng0811@163.com"
echo   ?????????? main?
echo.

echo [3/3] ????????????? ...
git add -A
git commit -m "chore: initialize blog repo with anzhiyu theme vendored"
echo.

echo ============================================
echo   ??????????
echo ============================================
git log --oneline
git status
echo.
pause
