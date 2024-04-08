from rest_framework import generics, permissions, pagination, viewsets
from .models import Vendor, Product, Customer,Order, OrderItem, CustomerAddress, ProductRating, ProductCategory, ProductImage
from .serializers import VendorSerializer, VendorDetailSerializer
from .serializers import ProductListSerializer, ProductDetailSerializer, ProductRatingSerializer, ProductImageSerializer
from .serializers import CustomerDetailSerializer, CustomerSerializer, CustomerAddressSerializer
from .serializers import OrderSerializer, OrderDetailSerializer, OrderItemSerializer
from .serializers import CategorySerializer, CategoryDetailSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate;
from django.contrib.auth.models import User
from django.db import IntegrityError
###VENDOR
class VendorList(generics.ListCreateAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer


class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorDetailSerializer

###Category
class CategoryList(generics.ListCreateAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = CategoryDetailSerializer

###PRODUCT
class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    pagination_class  = pagination.PageNumberPagination

    # # Sort out result setParams
    def get_queryset(self):
        qs = super().get_queryset()
        if 'category' in self.request.GET:
            category_id = self.request.GET['category']
            category = ProductCategory.objects.get(id=category_id)
            qs = qs.filter(category=category)
            qs = super().get_queryset()
        if 'fetch_limit' in self.request.GET:
            limit = int(self.request.GET['fetch_limit'])
            qs = qs[:limit]
        return qs


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer

###Product Image
class ProductImgsList(generics.ListCreateAPIView):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer

###Product Image
class ProductImgsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer
    def get_queryset(self):
        qs=super().get_queryset()
        product_id=self.kwargs['product_id']
        qs=qs.filter(product_id=product_id)
        return qs
           
        

##CUSTOMER
class CustomerList(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerDetailSerializer

##ORDER
class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetail(generics.ListAPIView):
    #queryset = OrderItem.objects.all()
    serializer_class = OrderDetailSerializer

    # def get_queryset(self):
    #     order_id=self.kwargs['pk']
    #     order = Order.objects.get(id=order_id)
    #     order_items = OrderItem.objects.filter(order=order)
    #     return order_items


class OrderItemList(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

#Customer address
class CustomerAddressViewSet(viewsets.ModelViewSet):
    #queryset = OrderItem.objects.all()
    # A viewset for viewing and editing user instances. get or post instead of list or create
    serializer_class = CustomerAddressSerializer
    queryset = CustomerAddress.objects.all()

#Product Rating
class ProductRatingViewSet(viewsets.ModelViewSet):
    serializer_class = ProductRatingSerializer
    queryset = ProductRating.objects.all()


#creating post request we create csrf token
@csrf_exempt
def CustomerLogin(request):
    #django save password in the hash format so password must be in hash
    # msg={
    #     'bool':True,
    #     'post': request.POST
    #     }
    username=request.POST.get('username')
    password=request.POST.get('password')
    user=authenticate(username=username, password=password)
    if user:
        customer = Customer.objects.get(user=user)
        msg={
            'bool':True,
            'user':user.username,
            'id':customer.id,
        }
    else:
        msg={
            'bool':False,
            'msg':'Invalid Username/Password'
        }
    return JsonResponse(msg)

@csrf_exempt
def CustomerRegister(request):
    first_name=request.POST.get('first_name');
    last_name=request.POST.get('last_name');
    email=request.POST.get('email');
    phone=request.POST.get('phone');
    username=request.POST.get('username');
    password=request.POST.get('password');
    try:
        user=User.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            username=username,
            password=password
        )


        if user:
            #create customer
            try:
                customer=Customer.objects.create(
                    user=user,
                    phone=phone
                )

                msg={
                    'bool':True,
                    'user':user.id,
                    'customer': customer.id,
                    'msg': 'Thank you for joining with us ^_^. You can login now.'
                }
            except IntegrityError:
                msg={
                    'bool':False,
                    'msg':'Phone Number already exist!!!!!'
                }
        else:
            msg={
                'bool':False,
                'msg':'You have provided invalid credentials.'
            }
    except IntegrityError:
        msg={
            'bool':False,
            'msg':'Username already exist!!!!!!'
        }
    return JsonResponse(msg)


@csrf_exempt
def VendorRegister(request):
    first_name=request.POST.get('first_name');
    last_name=request.POST.get('last_name');
    email=request.POST.get('email');
    phone=request.POST.get('phone');
    address=request.POST.get('address');
    username=request.POST.get('username');
    password=request.POST.get('password');
    try:
        user=User.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            username=username,
            password=password
        )


        if user:
            #create customer
            try:
                vendor=Vendor.objects.create(
                    user=user,
                    phone=phone,
                    address=address,
                )

                msg={
                    'bool':True,
                    'user':user.id,
                    'vendor': vendor.id,
                    'msg': 'Thank you for joining with us ^_^. You can login now.'
                }
            except IntegrityError:
                msg={
                    'bool':False,
                    'msg':'Phone Number already exist!!!!!'
                }
        else:
            msg={
                'bool':False,
                'msg':'You have provided invalid credentials.'
            }
    except IntegrityError:
        msg={
            'bool':False,
            'msg':'Username already exist!!!!!!'
        }
    return JsonResponse(msg)


#creating post request we create csrf token
@csrf_exempt
def VendorLogin(request):
    #django save password in the hash format so password must be in hash
    # msg={
    #     'bool':True,
    #     'post': request.POST
    #     }
    username=request.POST.get('username')
    password=request.POST.get('password')
    user=authenticate(username=username, password=password)
    if user:
        vendor = Vendor.objects.get(user=user)
        msg={
            'bool':True,
            'user':user.username,
            'id':vendor.id,
        }
    else:
        msg={
            'bool':False,
            'msg':'Invalid Username/Password'
        }
    return JsonResponse(msg)
