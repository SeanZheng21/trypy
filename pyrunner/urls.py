from django.urls import path
from rest_framework import routers
from pyrunner import views


app_name = 'pyrunner'
urlpatterns = [
    path('', views.index, name='index'),
    path('process', views.process_code, name='process')
]