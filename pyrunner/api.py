from pyrunner.models import Code
from rest_framework import viewsets, permissions
from .serializers import PyrunnerSerializer


class PyrunnerViewSet(viewsets.ModelViewSet):
    queryset = Code.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PyrunnerSerializer
