#!/bin/bash


for((i=1; i<=$@; i++))
do
	touch ${i}.js;
done
	echo "檔案建立完成";

