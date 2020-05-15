from pyrunner.models import Code
from rest_framework import viewsets, permissions, filters
from .serializers import PyrunnerSerializer


class PyrunnerViewSet(viewsets.ModelViewSet):
    queryset = Code.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = PyrunnerSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['id']

    def get_queryset(self):
        return self.request.user.codes.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

