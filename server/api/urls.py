from api.views import UserViewSet, ProfileViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'auth/register', ProfileViewSet, basename='profile')
urlpatterns = router.urls