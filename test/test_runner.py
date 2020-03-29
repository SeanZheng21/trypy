import unittest
from runner.runner import Runner


class TestRunner(unittest.TestCase):
    def setUp(self):
        self.runner = Runner("""print(5.2)""")

    def test_run_num(self):
        res = self.runner.execute()
        self.assertEqual('5.2', res.strip())

    def test_run_func(self):
        res = Runner("def print_message(msg):\n" +
                     "\tprint(\"the message is: \", msg)" +
                     "\t\n" +
                     "\t\n" +
                     "print_message('hello world!')" +
                     "\n").execute()
        self.assertEqual('the message is:  hello world!', res.strip())
