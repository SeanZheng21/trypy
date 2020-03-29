from django.shortcuts import render
from rest_framework.decorators import parser_classes, api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

# Create your views here.
from runner.runner import Runner


def index(request):
    return render(request, 'pyrunner/index.html')


@api_view(['GET'])
@parser_classes([JSONParser])
def process_code(request, format='application/json'):
    """
    A view that can accept POST requests with JSON content.
    """
    runner = Runner(request.data['python_code'])
    execution_res = runner.execute()
    success = execution_res.strip() != ''
    return Response({
        'received program': request.data,
        'execution result': execution_res,
        'success': success
    })
