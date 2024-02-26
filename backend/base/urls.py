
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView
from . import views
urlpatterns = [
    
    path('', views.index),
    path('products', views.products),
    path('addproduct', views.addproduct),
    path('delproduct/<int:id>',views.delproduct),
    path('login/', TokenObtainPairView.as_view()),
    path('members', views.members),
    path('register', views.register),
    
]
