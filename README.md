# trypy
 Online Python Executor Project
Run Django: under trypy, use 'python manage.py runserver'\
Run npm for development: use 'npm run dev'

# Use python code runner:
## Success case:
POST http://127.0.0.1:8000/api/process\
{
    "python_code": "print('hello world!')"
}\
Response:\
{
    "received_program": {
        "python_code": "print('hello world!')"
    },
    "execution_result": "hello world!",
    "execution_error": "",
    "success": true
}

## Error case:
POST http://127.0.0.1:8000/api/process\
{
    "python_code": "print(5/0)"
}\
Response:\
{
    "received_program": {
        "python_code": "print(5/0)"
    },
    "execution_result": "",
    "execution_error": "Traceback (most recent call last):\n  File \"/Users/Carlistle/Developer/PyCharmWorkspace/trypy/tempfile/code.txt\", line 1, in <module>\n    print(5/0)\nZeroDivisionError: division by zero",
    "success": false
}

# Use Code API:
POST http://127.0.0.1:8000/api/code  \
{
	"name": "hello",
	"content": "x=1\nprint(x)\nprint('Hello world!')",
	"owner": 1
}\
Response:\
{
    "id": 1,
    "name": "hello",
    "content": "x=1\nprint(x)\nprint('Hello world!')",
    "owner": 1,
    "created_at": "2020-04-04T08:49:16.621770Z"
}

GET http://127.0.0.1:8000/api/code\
[
    {
        "id": 1,
        "name": "hello",
        "content": "x=1\nprint(x)\nprint('Hello world!')",
        "owner": 1,
        "created_at": "2020-04-04T08:49:16.621770Z"
    },
    {
        "id": 2,
        "name": "nnn",
        "content": "print(1 + 1)",
        "owner": 1,
        "created_at": "2020-04-04T08:53:04.197430Z"
    }
]

GET http://127.0.0.1:8000/api/code_detail/1 \
[
    {
        "id": 1,
        "name": "hello",
        "content": "x=1\nprint(x)\nprint('Hello world!')",
        "owner": 1,
        "created_at": "2020-04-04T08:49:16.621770Z"
    }
]

DELETE: http://127.0.0.1:8000/api/code_detail/10  \
{
    "id": 10,
    "name": "foo",
    "content": "print('foo')",
    "owner": 1,
    "created_at": "2020-04-07T10:40:10.133346Z"
}

Response:\
{
    "id": 10,
    "name": "foo",
    "content": "print('foo')",
    "owner": 1,
    "created_at": "2020-04-07T10:40:10.133346Z"
}

PUT:  http://127.0.0.1:8000/api/code_detail/2 \
{
        "id": 2,
        "name": "goodbyeeeeeee",
        "content": "x=2\nprint(x)\nprint('Foooooooo!')",
        "owner": 1,
        "created_at": "2020-04-04T08:53:04.197430Z"
	
}