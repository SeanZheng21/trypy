import os
BASE = "/Users/Carlistle/Developer/PyCharmWorkspace/trypy/"


class Runner:
    def __init__(self, code=""):
        self.code = code.replace("\"", "\\\"")
        self.success = False
        self.result = ''

    def execute(self):
        code_file = open(BASE + "tempfile/code.txt", "w+")
        code_file.write(self.code)
        code_file.close()
        code_file = open(BASE + "tempfile/res.txt", "w+")
        code_file.close()
        os.system(BASE + "tempfile/pyexecuter.sh")
        f = open("" + BASE + "tempfile/res.txt", "r")
        result = f.read()
        f.close()
        os.system("rm " + BASE + "tempfile/res.txt")
        os.system("rm " + BASE + "tempfile/code.txt")
        return result.strip()
