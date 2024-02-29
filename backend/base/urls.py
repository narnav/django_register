
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView
from . import views
urlpatterns = [
    
    path('', views.index),
    
    path('products', views.ProductsView.as_view()),
    path('products/<int:pk>', views.ProductsView.as_view()),
    # path('addproduct', views.addproduct),
    # path('delproduct/<int:id>',views.delproduct),
    path('login', TokenObtainPairView.as_view()),
    path('members', views.members),
    path('register', views.register),
    
]
