import unittest

from rest_framework.test import RequestsClient, APIRequestFactory, APITestCase
from rest_framework import status


class TestViews(APITestCase):
    def setUp(self):
        self.client = APIRequestFactory()

    def test_process_code_simple(self):
        request = self.client.get('/api/process/', {"python_code": "print('hello world!')"})
        self.assertEqual(status.HTTP_200_OK, request.status_code)
        """{
            "received_program": {
                "python_code": "print('hello world!')"
            },
            "execution_result": "hello world!",
            "success": true
        }"""

