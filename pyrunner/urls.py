from django.urls import path, include
from rest_framework import routers
from pyrunner import views
from .api import PyrunnerViewSet

app_name = 'pyrunner'
router = routers.DefaultRouter()
router.register('code', PyrunnerViewSet, 'code')

urlpatterns = [
    path('', views.index, name='index'),
    path('process', views.process_code, name='process'),
    path('code_detail/<int:pk>', views.code_detail),
    path('code', include('pyrunner.codeurls')),
]
