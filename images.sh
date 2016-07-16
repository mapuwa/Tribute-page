#!/usr/bin/env bash

mkdir images 2>/dev/null
for i in *.jpg *.png
do
	if [[ $i =~ .*\.jpg  && `identify  "$i"  | cut -d' ' -f3 | cut -dx -f1` -gt 1000 ]]
	then
		 convert $i -resize 1000 "images/$i"
	else
		cp $i "images/$i"
	fi

done