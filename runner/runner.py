import os
BASE = "/Users/Carlistle/Developer/PyCharmWorkspace/trypy/"


class Runner:
    def __init__(self, code=""):
        self.__code = code
        self.__success = False
        self.__result = ''
        self.__error_msg = ''

    def execute(self):
        # The code.txt contains the program
        code_file = open(BASE + "tempfile/code.txt", "w+")
        code_file.write(self.__code)
        code_file.close()
        # The res.txt contains the result
        # Initially empty, empty when error occurs
        code_file = open(BASE + "tempfile/res.txt", "w+")
        code_file.close()
        # The error.txt contains the error message
        # Empty when the code executes without any error
        code_file = open(BASE + "tempfile/error.txt", "w+")
        code_file.close()

        # Execute the code.txt in python with script pyexecuter.sh
        shell_path = BASE + "tempfile/pyexecuter.sh"
        os.system(shell_path)

        # Read the result
        f_res = open("" + BASE + "tempfile/res.txt", "r")
        self.__result = f_res.read().strip()
        f_res.close()
        # Read the error
        f_err = open("" + BASE + "tempfile/error.txt", "r")
        self.__error_msg = f_err.read().strip()
        f_err.close()

        # Clean up
        os.system("rm " + BASE + "tempfile/res.txt")
        os.system("rm " + BASE + "tempfile/code.txt")
        os.system("rm " + BASE + "tempfile/error.txt")

        # Update the error
        if self.__error_msg:
            self.__success = False
        else:
            self.__success = True

    def get_code(self):
        return self.__code

    def get_result(self):
        return self.__result

    def get_error_msg(self):
        return self.__error_msg

    def is_success(self):
        return self.__success