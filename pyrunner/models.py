from django.db import models


# Create your models here.
class Code(models.Model):
    name = models.CharField(max_length=64)
    content = models.CharField(max_length=1024)
    owner = models.IntegerField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
