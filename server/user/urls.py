from .views import ProfileViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path


router = DefaultRouter()
# router.register(r'users', UserViewSet, basename='user')
router.register(r'users', ProfileViewSet, basename='profile')
urlpatterns = router.urls

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns += [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]