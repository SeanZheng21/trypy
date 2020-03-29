from django.shortcuts import render
from rest_framework.decorators import parser_classes, api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response


# Create your views here.
def index(request):
    return render(request, 'pyrunner/index.html')


@api_view(['GET'])
@parser_classes([JSONParser])
def process_code(request, format=None):
    """
    A view that can accept POST requests with JSON content.
    """
    return Response({
        'received data': request.data,
        'answer': 'great'
    })
