from django.urls import path, include
from django.views.generic import RedirectView
from rest_framework import routers
from pyrunner import views
from .api import PyrunnerViewSet

app_name = 'pyrunner'
router = routers.DefaultRouter()
router.register('code', PyrunnerViewSet, 'code')

favicon_view = RedirectView.as_view(url='frontend/static/favicon.ico', permanent=True)

urlpatterns = [
    path('', views.index, name='index'),
    path('process', views.process_code, name='process'),
    path('code_detail/<int:pk>', views.code_detail),
    path('code', include('pyrunner.codeurls')),
    path('exec_project', views.exec_project),
    path('favicon/.ico', favicon_view),

]
