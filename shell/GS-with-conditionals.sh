#!/bin/bash
# Getting started with conditionals

read x

case "$x" in
	Y|y)
        echo "YES"
    ;;
	n|N)
        echo "NO"
    ;;
esac