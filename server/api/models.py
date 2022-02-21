from django.db import models
from django.contrib.auth.models import User

# Create your models here.

gender = (
    ("male", "male"),
    ("female", "female"), 
)

# This is an extension of the user model

class Profile(models.Model):
    user = models.OneToOneField(User, related_name="profile", on_delete=models.CASCADE, primary_key=True)
    date_of_birth = models.DateField(blank=False)
    gender = models.CharField(max_length=20, choices=gender)

    def __str__(self) -> str:
            return str(self.user) 