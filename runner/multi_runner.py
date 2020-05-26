import os
# BASE_DIR = "/Users/Carlistle/Developer/PyCharmWorkspace/trypy/"
from runner.runner import Runner

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class MultiRunner:
    def __init__(self, main_module, imported_modules):
        self.__main_module = main_module
        self.__imported_modules = imported_modules
        self.__success = False
        self.__result = ''
        self.__error_msg = ''

    def execute(self):
        self.write_imports()
        runner = Runner(self.__main_module)
        runner.execute()
        self.__result = runner.get_result()
        self.__error_msg = runner.get_error_msg()
        self.__success = runner.is_success()
        self.remove_imports()

    def write_imports(self):
        for (name, content) in self.__imported_modules:
            code_file = open(os.path.join(BASE_DIR, "tempfile/" + name + ".py"), "w+")
            code_file.write(content)
            code_file.close()

    def remove_imports(self):
        for (name, _) in self.__imported_modules:
            os.system("rm " + os.path.join(BASE_DIR, "tempfile/" + name + ".py"))

    def get_main_module(self):
        return self.__main_module

    def get_imported_modules(self):
        return self.__imported_modules

    def get_error_msg(self):
        return self.__error_msg

    def is_success(self):
        return self.__success

    def get_result(self):
        return self.__result
