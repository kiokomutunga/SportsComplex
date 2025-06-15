from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('book/', views.book_event, name='book_event'),
    path('', views.dashboard_redirect, name='dashboard_redirect'),
    path('dashboard/', views.dashboard_redirect, name='dashboard_redirect'),
    path('staff/dashboard/', views.admin_dashboard, name='admin_dashboard'),
    path('staff/pending/', views.pending_events, name='pending_events'),
    path('staff/review/<int:event_id>/', views.review_event, name='review_event'),
    path('accounts/login/', views.login_view, name='login'),
    path('accounts/logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
    path('accounts/register/', views.register_view, name='register'),
]
