#!/bin/bash

echo "Comprobando duplicados..."


if [[ -n $(find . -maxdepth 3 -name "*(1)*" -print) ]]
then
    find . -maxdepth 3 -name "*(1)*" -print
    exit 1
fi

if [[ -n $(find . -maxdepth 3 -name "*(copia)*" -print) ]]
then
    find . -maxdepth 3 -name "*(copia)*" -print
    exit 1
fi

echo "OK!"