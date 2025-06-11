from django.shortcuts import render, redirect , get_list_or_404
from django.contrib.auth.decorators import login_required, user_passes_test
from .models import Event
from .forms import EventBookingForm ,EventApprovalForm

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