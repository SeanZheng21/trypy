import unittest
from runner.runner import Runner


class TestRunner(unittest.TestCase):
    def setUp(self):
        self.runner = Runner("""print(5.2)""")
        self.runner.execute()

    def test_run_num(self):
        res = self.runner.get_result()
        self.assertEqual('5.2', res)

    def test_run_func(self):
        r = Runner("def print_message(msg):\n" +
                   "\tprint(\"the message is: \", msg)\n" +
                   "\t\n" +
                   "\t\n" +
                   "print_message('hello world!')" +
                   "\n")
        r.execute()
        res = r.get_result()
        self.assertEqual('the message is:  hello world!', res)

    def test_run_zero_error(self):
        r = Runner("print(5/0)")
        r.execute()
        self.assertFalse(r.is_success())
        self.assertTrue(r.get_error_msg().endswith('division by zero'))

    def test_run_syntax_error(self):
        r = Runner("print(5/0))")
        r.execute()
        self.assertFalse(r.is_success())
        self.assertTrue(r.get_error_msg().endswith('invalid syntax'))
