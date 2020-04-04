from django.urls import path
from rest_framework import routers
from pyrunner import views
from .api import PyrunnerViewSet

app_name = 'pyrunner'
router = routers.DefaultRouter()
router.register('', PyrunnerViewSet, 'code')
urlpatterns = router.urls
