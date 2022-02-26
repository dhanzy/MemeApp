from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer, ProfileSerializer
from .models import Profile
from rest_framework import mixins
from django.contrib.auth.hashers import make_password
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.decorators import action
# Create your views here.


class ProfileViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def get_permissions(self):
        if self.action == "create":
            self.permission_classes = [AllowAny]
        elif self.action == "list":
            self.permission_classes = [IsAdminUser]
        elif self.action == "me":
            self.permission_classes = [IsAuthenticated]
        return super().get_permissions()
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serialized_validated_data = serializer.validated_data
            user_data = serialized_validated_data.get("user")
            user_data['password'] = make_password(user_data.get('password'))
            dob = serialized_validated_data.get("date_of_birth")
            gender = serialized_validated_data.get("gender")
            new_user_instance = UserSerializer(data=user_data)
            if new_user_instance.is_valid():
                the_instance= new_user_instance.save()
                Profile.objects.create(user = the_instance, date_of_birth = dob, gender = gender)

    @action(detail=False, methods=['get', 'patch', 'put', 'delete'])
    def me(self, request):
        self.kwargs['pk'] = request.user.pk

        if request.method == 'GET':
            return self.retrieve(request)
        elif request.method == 'PATCH':
            return self.partial_update(request)
        elif request.method == "DELETE":
            return self.destroy(request)
        else:
            raise Exception('Not implemented')
