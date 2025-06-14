from django.urls import path
from . import views
from django.contrib.auth import views as auth_views



urlpatterns = [
    path('book/', views.book_event, name='book_event'),
    path('', views.user_dashboard, name = 'user_dashboard'),
    path('dashboard/', views.user_dashboard, name='user_dashboard'),
    path('admin/pending/', views.pending_events, name='pending_events'),
    path('admin/review/<int:event_id>/', views.review_event, name='review_event'),
    path('accounts/login/', views.login_view, name='login'),
    path('accounts/logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
    path('accounts/register/', views.register_view, name='register'),
    path('admin/dashboard/', views.admin_dashboard, name='admin_dashboard'),

]