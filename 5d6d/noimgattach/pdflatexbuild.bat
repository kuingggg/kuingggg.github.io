@echo off
set /P f=输入需要编译的tex文件名(不需要扩展名): 
pdflatex %f%
pdflatex %f%