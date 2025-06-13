from django import forms
from .models import Event
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.forms import UserCreationForm
from django import forms

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
        model = User
        fields = ['username', 'email', 'phone_number', 'password1', 'password2']

    def save(self, commit=True):
        user = super().save(commit=False)
        email = self.cleaned_data['email']
        user.email = email
        user.username = email

        if commit:
            user.save()
        return user
class EmailOrUsernameAuthenticationForm(forms.Form):
    email_or_username = forms.CharField(label="Email or Username")
    password = forms.CharField(widget=forms.PasswordInput)

    def clean(self):
        from django.contrib.auth import authenticate
        email_or_username = self.cleaned_data.get('email_or_username')
        password = self.cleaned_data.get('password')

        user = authenticate(username=email_or_username, password=password)
        if user is None:
            from django.contrib.auth import get_user_model
            UserModel = get_user_model()
            try:
                user_obj = UserModel.objects.get(email=email_or_username)
                user = authenticate(username=user_obj.username, password=password)
            except UserModel.DoesNotExist:
                pass

        if user is None:
            raise forms.ValidationError("Invalid credentials")
        self.user = user
        return self.cleaned_data