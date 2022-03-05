from datetime import date
import email
from .models import Profile
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

    username = serializers.CharField(required=True,)

    def validate_username(self, value):
        lower_username = value.lower()
        if User.objects.filter(username__iexact=lower_username).exists():
            raise serializers.ValidationError("Username already exist")
        return lower_username

    def validate_email(self, value):
        lower_email = value.lower()
        if User.objects.filter(email__iexact=lower_email).exists():
            raise serializers.ValidationError("Email already exist")
        return lower_email

    class Meta:
        model = User
        fields = ['id','first_name', 'last_name', 'username', 'email', 'password', 'is_staff']
    
        

    # def create(self, validated_data):
    #     validated_data['password'] = make_password(validated_data.get('password'))
    #     return super(UserSerializer, self).create(validated_data)

# This is an extension of the user serializer

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    date_of_birth = serializers.DateField(required=False, format="%d-%m-%Y")

    # gender = serializers.CharField(
    #     required=True,
    # )

    class Meta:
        model = Profile
        fields = ['user', 'date_of_birth', 'gender']
                