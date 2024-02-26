from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
@api_view(['GET'])
def index(req):
    return Response({'msg':'hello'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def members(req):
    return Response('members only- yaya')




class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

@api_view(['POST'])
def register(request):
    user = User.objects.create_user(
                username=request.data['username'],
                email=request.data['email'],
                password=request.data['password']
            )
    user.is_active = True
    user.is_staff = True
    user.save()
    return Response("new user born")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def products(req):
    user= req.user
    pro_product = user.product_set.all()
    # pro_product=Product.objects.all()
    return Response (ProductSerializer(pro_product,many=True).data)

@api_view(['POST'])
def addproduct(req):
    pro_product = ProductSerializer(data=req.data)
    if pro_product.is_valid():
        pro_product.save()
        return Response ("post...")

@api_view(['DELETE'])
def delproduct(req,id=-1):
    pro_product=Product.objects.get(id=id)
    pro_product.delete()
    return Response ("del...")


