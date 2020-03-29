import unittest
from runner.runner import Runner


class TestRunner(unittest.TestCase):
    def setUp(self):
        self.runner = Runner('some code')

    def test_construct(self):
        self.assertEqual('some code', self.runner.code, 'wrong code')
