@echo Changing directory
cd "C:\Program Files\Windows Defender"
@echo Removing current Windows Defender definitions
MpCmdRun.exe -removedefinitions -dynamicsignatures
@echo Installing new Windows Defender definitions
MpCmdRun.exe -SignatureUpdate"
@echo Process complete...
pause