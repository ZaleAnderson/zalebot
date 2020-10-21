@echo off
print "If you do not see your devices serial number below this text, please make sure you have developer mode enabled and you have adb drivers installed!"
"%APPDATA%\SideQuest\platform-tools\adb.exe" "devices"
echo If you see your serial number along with `device next to it`
pause
echo Enabling 90hz
"%APPDATA%\SideQuest\platform-tools\adb.exe" shell "setprop debug.oculus.refreshRate 90"
"%APPDATA%\SideQuest\platform-tools\adb.exe" shell "settings put global 90hz_global 1"
echo 90hz enabled!
echo You may now close this window
pause