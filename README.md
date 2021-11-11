# trypy
Online Python Executor 
Front-end: React
Back-end: Django


## Usage
To start Django server: under trypy, use 'python manage.py runserver'\
Run npm for development: use 'npm run dev'

## Use python code runner:
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
Response:\
{
        "id": 2,
        "name": "goodbyeeeeeee",
        "content": "x=2\nprint(x)\nprint('Foooooooo!')",
        "owner": 1,
        "created_at": "2020-04-04T08:53:04.197430Z"
	
}

# Run multiple files with a main
POST http://127.0.0.1:8000/api/exec_project \
with a valid token\
{
    "main_module": "import c\n\nc.my_print('Taylor')",
    "imported_modules": [
    	{"name": "b", "content": "def my_print(name):\n\tprint('Hello, ' + name + ' !')"},
    	{"name": "c", "content": "def my_print(name):\n\tprint('Hi, ' + name + ' !')"},
    	{"name": "ddd", "content": "789"}
    ]
}

### Response
{
    "received_program": {
        "main_module": "import c\n\nc.my_print('Taylor')",
        "imported_modules": [
            {
                "name": "b",
                "content": "def my_print(name):\n\tprint('Hello, ' + name + ' !')"
            },
            {
                "name": "c",
                "content": "def my_print(name):\n\tprint('Hi, ' + name + ' !')"
            },
            {
                "name": "ddd",
                "content": "789"
            }
        ]
    },
    "execution_result": "Hi, Taylor !",
    "execution_error": "",
    "success": true
}


# User Authentication API

## Register
POST http://127.0.0.1:8000/api/auth/register \
{	
	"username": "tom",
	"email": "tom@gmail.com",
	"password": "123456"
}

### Response
{
    "user": {
        "id": 4,
        "username": "tom",
        "email": "tom@gmail.com"
    },
    "token": "ab9e9898c1b1e077be341ad8e52aa63a440e7bb51052410ffc56a61f053e9ce5"
}

## Login
POST http://127.0.0.1:8000/api/auth/login \
{
	"username": "taylor",
	"password": "123456"
}

### Response
{
    "user": {
        "id": 2,
        "username": "taylor",
        "email": "taylor@gmail.com"
    },
    "token": "dd1625c17eb7aea4e267505abacd160f0b0acd597d5be27ef515bf3f1ad240d7"
}


## Get User
GET http://127.0.0.1:8000/api/auth/user \

Authorization:   Token dd1625c17eb7aea4e267505abacd160f0b0acd597d5be27ef515bf3f1ad240d7

### Response
{
    "id": 2,
    "username": "taylor",
    "email": "taylor@gmail.com"
}

If the token is invalid:\
{
    "detail": "Invalid token."
}

## Log Out
POST http://127.0.0.1:8000/api/auth/logout \
Authorization:   Token dd1625c17eb7aea4e267505abacd160f0b0acd597d5be27ef515bf3f1ad240d7

### Response
Nothing, but the token is invalidated in the server