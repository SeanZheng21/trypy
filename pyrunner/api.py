from pyrunner.models import Code
from rest_framework import viewsets, permissions, filters
from .serializers import PyrunnerSerializer


class PyrunnerViewSet(viewsets.ModelViewSet):
    queryset = Code.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PyrunnerSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['id']
