from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer, ProfileSerializer
from .models import Profile
from rest_framework import mixins
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()

class ProfileViewSet(mixins.CreateModelMixin):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serialized_validated_data = serializer.validated_data
            user_data = serialized_validated_data.get("user")
            print(user_data['password'])
            if len(user_data['password']) < 8:
                serializer.errors
                return {"BAD PASSWORD"}
                print("Yes")
            # dob = serialized_validated_data.get("date_of_birth")
            # gender = serialized_validated_data.get("gender")
            # new_user_instance = UserSerializer(data=user_data)
            # if new_user_instance.is_valid():
            #     the_instance= new_user_instance.save()
            #     print("Done")
            #     Profile.objects.create(user = the_instance, date_of_birth = dob, gender = gender)
            #     print("Saved")