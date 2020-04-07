#!/bin/bash
CWD="/Users/Carlistle/Developer/PyCharmWorkspace/trypy"
$CWD/interpreter/bin/python "$CWD/tempfile/code.txt" 2>&1 > $CWD/tempfile/res.txt
