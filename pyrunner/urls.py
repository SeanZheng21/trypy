from django.urls import path

from pyrunner import views

app_name = 'pyrunner'
urlpatterns = [
    path('', views.index, name='index')
]