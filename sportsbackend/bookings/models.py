from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
    STATUS_CHOICES = [
        ('PENDING','pending'),
        ('APPROVED','Approved'),
        ('REJECTED','Rejected'),
    ]
    name = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateTimeField()
    created_by = models.ForeignKey(User, on_delete = models.CASCADE)
    status = models.CharField(max_length=10,choices=STATUS_CHOICES, default='PENDING')
    rejection_reason = models.TextField(blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):                        
        return f"{self.name} ({self.status})"
