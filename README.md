# trypy
 Online Python Executor Project
Run Django: under trypy, use 'python manage.py runserver'\
Run npm for development: use 'npm run dev'

#Use Code API:
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

DELETE: http://127.0.0.1:8000/api/code_detail/4  \
[
]


PUT:  http://127.0.0.1:8000/api/code_detail/2 \
{
        "id": 2,
        "name": "goodbyeeeeeee",
        "content": "x=2\nprint(x)\nprint('Foooooooo!')",
        "owner": 1,
        "created_at": "2020-04-04T08:53:04.197430Z"
	
}