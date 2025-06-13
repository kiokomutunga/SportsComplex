from django import forms
from .models import Event
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import CustomUser

class EventBookingForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = ['name','description', 'date']

class EventApprovalForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = ['status', 'rejection_reason']
#admin clear logic
        def clean(self):
            cleaned_data = super().clean()
            status = cleaned_data.get("status")
            reason = cleaned_data.get("rejection_reason")
            if status == 'REJECTED' and not reason:
                self.add_error('rejection_reason', 'rejection reason is required when rejecting')
            return cleaned_data


class UserRegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)
    phone_number = forms.CharField(required=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'phone_number', 'password1', 'password2']

class CustomLoginForm(forms.Form):
    identifier = forms.CharField(label="Email or Username")
    password = forms.CharField(widget=forms.PasswordInput)