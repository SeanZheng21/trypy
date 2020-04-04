from rest_framework import serializers
from pyrunner.models import Code


class PyrunnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Code
        fields = '__all__'
