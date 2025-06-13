from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return self.username

class Event(models.Model):
    STATUS_CHOICES = [
        ('PENDING','pending'),
        ('APPROVED','Approved'),
        ('REJECTED','Rejected'),
    ]
    name = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateTimeField()
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    status = models.CharField(max_length=10,choices=STATUS_CHOICES, default='PENDING')
    rejection_reason = models.TextField(blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):                        
        return f"{self.name} ({self.status})"
