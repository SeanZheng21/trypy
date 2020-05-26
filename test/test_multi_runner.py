import unittest

from runner.multi_runner import MultiRunner


class TestRunner(unittest.TestCase):
    def setUp(self):
        main_module = 'import c\n\nc.my_print(\'Taylor\')'
        import_arr = [
            ('b', 'def my_print(name):\n\tprint(\'Hello, \' + name + \' !\')'),
            ('c', 'def my_print(name):\n\tprint(\'Hi, \' + name + \' !\')')
        ]
        self.multi_runner = MultiRunner(main_module, import_arr)
        self.multi_runner.execute()

    def test_execute_result(self):
        self.assertEqual('Hi, Taylor !', self.multi_runner.get_result())
        self.assertTrue(self.multi_runner.is_success())
        self.assertEqual(self.multi_runner.get_error_msg(), '')

    def test_execute_fail(self):
        import_arr = [
            ('b', 'def my_print(name):\n\tprint(\'Hello, \' + name + \' !\')'),
            ('c', 'def my_print(name):\n\tprint(\'Hi, \' + name + \' !\')')
        ]
        main_module = 'c.my_print(\'Taylor\')'
        multi_runner = MultiRunner(main_module, import_arr)
        multi_runner.execute()
        self.assertEqual('', multi_runner.get_result())
        self.assertFalse(multi_runner.is_success())
        self.assertNotEqual('', multi_runner.get_error_msg())
