from django.shortcuts import render, redirect , get_list_or_404
from django.contrib.auth.decorators import login_required, user_passes_test
from .models import Event
from .forms import EventBookingForm ,EventApprovalForm
from django.contrib.auth import login
from .forms import UserRegisterForm
from django.contrib.auth import login as auth_login
from .forms import CustomLoginForm
from django.contrib.auth import authenticate, login

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

#admin dashboard
@login_required
@user_passes_test(is_admin)
def admin_dashboard(request):
    events = Event.objects.filter(status='PENDING')
    return render(request, 'bookings/admin_dashboard.html', {'events': events})

#user dashboard
@login_required
def user_dashboard(request):
    # Events created by the logged-in user
    user_events = Event.objects.filter(created_by=request.user)

    # Approved events by other users
    public_events = Event.objects.filter(status='APPROVED').exclude(created_by=request.user)

    return render(request, 'bookings/user_dashboard.html', {
        'user_events': user_events,
        'public_events': public_events
    })

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
            login(request, user,  backend='bookings.backends.EmailOrUsernameBackend')
            return redirect('user_dashboard')
    else:
        form = UserRegisterForm()
    return render(request, 'registration/register.html', {'form': form})

def login_view(request):
    form = CustomLoginForm(request.POST or None)
    if request.method == 'POST' and form.is_valid():
        identifier = form.cleaned_data['identifier']
        password = form.cleaned_data['password']
        user = authenticate(request, username=identifier, password=password)
        if user:
            login(request, user)
            return redirect('user_dashboard')
        else:
            form.add_error(None, "Invalid credentials")
    return render(request, 'registration/login.html', {'form': form})

@login_required
def user_dashboard(request):
    events = Event.objects.all()
    return render(request, 'bookings/userdashboard.html', {'events': events})

