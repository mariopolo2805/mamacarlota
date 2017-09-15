#!/bin/bash

find_command=$(find . -maxdepth 3 -name "*(1)*" -o -name "*(copia)*" -print)

echo "Comprobando duplicados..."


if [[ -n $find_command ]]
then
    find . -maxdepth 3 -name "*(1)*" -o -name "*(copia)*" -print
    exit 1
fi

echo "OK!"