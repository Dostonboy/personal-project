from django.contrib import admin
from django.urls import path,include
from mc_app import views


urlpatterns = [
    path('', views.index, name='home'),
    path('about/',views.AboutView.as_view(),name='about'),
    path('contact/', views.email, name='email'),


]
