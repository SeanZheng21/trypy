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
