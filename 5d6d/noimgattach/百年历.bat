@echo off
color 3F
mode con cols=40 lines=20
setlocal enabledelayedexpansion
set str=��һ����������
set sdate=%date%

:Main
cls&echo.
:: ������ȡ����ʽ����У��
for /f "tokens=1,2,3 delims=-/: " %%i in ("%sdate%") do (
    (set sy=%%i) && (set sm=%%j) && (set sd=%%k)
)
if not defined sd set sd=1
if not defined sm set sm=%sy%& set sy=%date:~0,4%

(set sy=0000%sy%) && (set sm=00%sm%) && (set sd=00%sd%)
(set sy=%sy:~-4%) && (set sm=%sm:~-2%) && (set sd=%sd:~-2%)
cd.
set /a y=1%sy%-10000, m=1%sm%-100, d=1%sd%-100 2>nul
if errorlevel 1 goto Error
if %y% lss 100 (
    if %y% lss 50 (set /a y+=2000) else (set /a y+=1900)
    set sy=!y!
)
if %m% lss 13 if %d% lss 32 goto Calc

:Error
echo.���������.
pause>nul
set sdate=%date%
goto Main

:Calc
:: ����ÿ���µ�����
set days=31
for %%i in (4 6 9 11) do if %m% equ %%i set days=30
:: ����2�·ݵ�ƫ��
set /a leap="^!(y%%4) & ^!(^!(y%%100)) | ^!(y%%400)"
if %m% equ 2 set /a days=28+%leap%
if %m% leq 2 (set /a y-=1& set /a m+=12)
:: ����ָ�����ڵ�������
set /a w=(d+2*m+3*(m+1)/5+y+y/4-y/100+y/400+1)%%7

echo.  %sy%��%sm%��  ��ѯ��:%sy%-%sm%-%sd%,����!str:~%w%,1!
echo.
:: ��������
set /a wb=(w+35-d) %% 7, we=wb+days+1, day=1
echo.    ��   һ   ��   ��   ��   ��   ��
echo. ��������������������������������������
set /p= <nul
for /l %%i in (0,1,37) do (
    set "temp=  "
    if %%i GTR %wb% if %%i LSS %we% (
        set temp= !day!
        set temp=!temp:~-2!
        if !d! EQU !day! set temp=��
        set /a day+=1
    )
    set /p=   !temp!<nul
    set /a "wm=(%%i+1)%%7"
    if !wm! equ 0 echo.&echo.&set /p= <nul
)
echo.
echo  ��������������������������������������
echo.  �������ڿɲ�ѯ�������ڲ���ʾ��������
echo.
set sdate=
set /p sdate=  ��ʽ�磺07-02-03��[�س�]�˳�:
if defined sdate goto Main