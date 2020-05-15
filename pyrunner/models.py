from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Code(models.Model):
    name = models.CharField(max_length=64)
    content = models.CharField(max_length=1024)
    owner = models.ForeignKey(User, related_name="codes", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
