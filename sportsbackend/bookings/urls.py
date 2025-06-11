from django.urls import path
from . import views

urlpatterns = [
    path('book/', views.book_event, name='book_event'),
    path('dashboard/', views.user_dashboard, name='user_dashboard'),
    path('admin/pending/', views.pending_events, name='pending_events'),
    path('admin/review/<int:event_id>/', views.review_event, name='review_event'),
]