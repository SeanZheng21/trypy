from django.shortcuts import render
from rest_framework.decorators import parser_classes, api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
from pyrunner.models import Code
from pyrunner.serializers import PyrunnerSerializer
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
        runner.execute()
        execution_res = runner.get_result()
        execution_err = runner.get_error_msg()
        success = runner.is_success()
        return Response({
            'received_program': request.data,
            'execution_result': execution_res,
            'execution_error': execution_err,
            'success': success
        })
    except:
        return Response({
            'received_program': request.data,
            'execution_result': 'error',
            'execution_error': 'error',
            'success': False
        })


@api_view(['DELETE', 'PUT', 'GET'])
def code_detail(request, pk):
    try:
        code = Code.objects.get(pk=pk)
    except Code.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'DELETE':
        serializer = PyrunnerSerializer(code)
        d = serializer.data
        code.delete()
        return Response(status=status.HTTP_204_NO_CONTENT, data=d)
    elif request.method == 'GET':
        serializer = PyrunnerSerializer(code)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PyrunnerSerializer(code, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
