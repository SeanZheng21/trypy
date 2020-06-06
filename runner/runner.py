import os
import shutil
# BASE_DIR = "/Users/Carlistle/Developer/PyCharmWorkspace/trypy/"
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Runner:
    def __init__(self, code=""):
        self.__code = code
        self.__success = False
        self.__result = ''
        self.__error_msg = ''

    def execute(self):
        # The code.txt contains the program
        code_file = open(os.path.join(BASE_DIR, "tempfile/code.txt"), "w+")
        code_file.write(self.__code)
        code_file.close()
        # The res.txt contains the result
        # Initially empty, empty when error occurs
        code_file = open(os.path.join(BASE_DIR, "tempfile/res.txt"), "w+")
        code_file.close()
        # The error.txt contains the error message
        # Empty when the code executes without any error
        code_file = open(os.path.join(BASE_DIR, "tempfile/error.txt"), "w+")
        code_file.close()

        # Execute the code.txt in python with script pyexecuter.sh
        shell_path = os.path.join(BASE_DIR, "tempfile/pyexecuter.sh")
        os.system(shell_path)

        # Read the result
        f_res = open(os.path.join(BASE_DIR, "tempfile/res.txt"), "r")
        self.__result = f_res.read().strip()
        f_res.close()
        # Read the error
        f_err = open(os.path.join(BASE_DIR, "tempfile/error.txt"), "r")
        self.__error_msg = f_err.read().strip()\
            .replace(os.path.join(BASE_DIR, "tempfile/"), '').replace('code.txt', 'main')
        f_err.close()

        # Clean up
        os.system("rm " + os.path.join(BASE_DIR, "tempfile/res.txt"))
        os.system("rm " + os.path.join(BASE_DIR, "tempfile/code.txt"))
        os.system("rm " + os.path.join(BASE_DIR, "tempfile/error.txt"))
        pycache_dir = os.path.join(BASE_DIR, "tempfile/__pycache__")
        if os.path.exists(pycache_dir) and os.path.isdir(pycache_dir):
            shutil.rmtree(pycache_dir)

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