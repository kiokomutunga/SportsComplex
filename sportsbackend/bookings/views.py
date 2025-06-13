from django.shortcuts import render, redirect , get_list_or_404
from django.contrib.auth.decorators import login_required, user_passes_test
from .models import Event
from .forms import EventBookingForm ,EventApprovalForm, EmailOrUsernameAuthenticationForm
from django.contrib.auth import login
from .forms import UserRegisterForm
from .forms import EmailLoginForm
from django.contrib.auth import login as auth_login

#recognize the admin

def is_admin(user):
    return user.is_staff

#booking

def book_event(request):
    if request.method == 'POST':
        form = EventBookingForm(request.POST)
        if form.is_valid():
            event = form.save(commit=False)
            event.created_by = request.user
            event.save()
            return redirect('user_dashboard')
    else:
        form = EventBookingForm()
    return render(request,'bookings/book_event.html', {'form': form})

#admin view all pending events
@login_required
@user_passes_test
def review_event(request, event_id):
    event = get_list_or_404(Event, id=event_id)
    if request.method == 'POST':
        form = EventApprovalForm(request.POST, instance=event)
        if form.is_valid():
            form.save()
            return redirect('pending_events')
    else:
        form = EventApprovalForm(instance=event)
    return render(request, 'bookings/review.html', {'form':form, 'event':event})
#user dashboard

@login_required
def user_dashboard(request):
    events = Event.objects.filter(all)
    return render(request, 'bookings/user_dashboard.html', {'events':events})

@login_required
@user_passes_test(is_admin)
def pending_events(request):
    events = Event.objects.filter(status='PENDING')
    return render(request, 'bookings/admin_pending.html', {'events': events})

def register_view(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # Auto login after registration
            return redirect('user_dashboard')  # or your preferred view
    else:
        form = UserRegisterForm()
    return render(request, 'registration/register.html', {'form': form})

def login_view(request):
    form = EmailLoginForm(request.POST or None)
    if request.method == 'POST':
        if form.is_valid():
            user = form.cleaned_data['user']
            auth_login(request, user)
            return redirect('user_dashboard')
    return render(request, 'registration/login.html', {'form': form})

def custom_login_view(request):
    form = EmailOrUsernameAuthenticationForm(request.POST or None)
    if request.method == 'POST' and form.is_valid():
        login(request, form.user)
        return redirect('user_dashboard')
    return render(request, 'registration/login.html', {'form': form})
