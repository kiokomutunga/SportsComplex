from django import forms
from .models import Event
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

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

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
