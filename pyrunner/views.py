from django.shortcuts import render
from rest_framework.decorators import parser_classes, api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

# Create your views here.
from runner.runner import Runner


def index(request):
    return render(request, 'pyrunner/index.html')


@api_view(['POST'])
@parser_classes([JSONParser])
def process_code(request, format='application/json'):
    """
    A view that can accept POST requests with JSON content.
    """
    if 'python_code' in request.data:
        runner = Runner(request.data['python_code'])
    else:
        runner = Runner('')
    try:
        execution_res = runner.execute()
        success = execution_res.strip() != ''
        return Response({
            'received_program': request.data,
            'execution_result': execution_res,
            'success': success
        })
    except:
        return Response({
            'received_program': request.data,
            'execution_result': 'error',
            'success': False
        })
