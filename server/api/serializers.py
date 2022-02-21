from datetime import date
import email
from api.models import Profile
from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        help_text='Leave empty if no change needed',
        validators=[validate_password],
        style={'input_type': 'password', 'placeholder': 'Password'}
    )

    first_name = serializers.CharField(
        required=True,
    )

    last_name = serializers.CharField(
        required=True,
    )

    email = serializers.CharField(
        required=True,
    )

    username = serializers.CharField(
        required=True,
    )

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password']
        

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(UserSerializer, self).create(validated_data)

# This is an extension of the user serializer

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    date_of_birth = serializers.CharField(
        required=True,
    )

    gender = serializers.CharField(
        required=True,
    )

    class Meta:
        model = Profile
        fields = ['user', 'date_of_birth', 'gender']
                