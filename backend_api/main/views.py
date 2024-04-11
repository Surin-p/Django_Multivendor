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
from django.contrib.auth.hashers import make_password

###VENDOR
class VendorList(generics.ListCreateAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        if 'fetch_limit' in self.request.GET:
            limit = int(self.request.GET['fetch_limit'])
            qs = qs[:limit]
        return qs
##Vendor detail

class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorDetailSerializer

#Vendor Product
class SellerProductList(viewsets.ModelViewSet):
    #queryset = OrderItem.objects.all()
    # A viewset for viewing and editing user instances. get or post instead of list or create
    serializer_class = ProductListSerializer
    queryset = Product.objects.all()

    def get_queryset(self):
        qs = super.get_queryset(self)
        vendor_id = self.kwargs['seller_id']
        qs = qs.filter(vendir__id=vendor_id).order_by('id')
        return qs
    
###Category
class CategoryList(generics.ListCreateAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = CategorySerializer

#Category Detail

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
        if 'fetch_limit' in self.request.GET:
            limit = int(self.request.GET['fetch_limit'])
            qs = qs[:limit]
        return qs

###Product Detail
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer

###Product Image List
class ProductImgsList(generics.ListCreateAPIView):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer

###Product Image Detail
class ProductImgsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer
      

##CUSTOMER List 
class CustomerList(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


##CUSTOMER Detail

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerDetailSerializer

##ORDER List
class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


##ORDER Detail
class OrderDetail(generics.ListAPIView):
    #queryset = OrderItem.objects.all()
    serializer_class = OrderDetailSerializer

    def get_queryset(self):
        order_id=self.kwargs['pk']
        order = Order.objects.get(id=order_id)
        order_items = OrderItem.objects.filter(order=order)
        return order_items
    
##ORDER Detail
class OrderDeleteMod(generics.RetrieveDestroyAPIView):
    #queryset = OrderItem.objects.all()
    serializer_class = OrderDetailSerializer


#ORDER Item List
class OrderItemList(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class CustomerOrderItemList(generics.ListAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

    def get_queryset(self):
        qs = super.get_queryset(self)
        customer_id = self.kwargs['pk']
        qs = qs.filter(order__customer__id=customer_id)
        return qs
    
class VendorCustomerOrderItemList(generics.ListAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

    def get_queryset(self):
        qs = super.get_queryset(self)
        vendor_id = self.kwargs['vendor_id']
        customer_id = self.kwargs['customer_id']
        qs = qs.filter(order__customer__id=customer_id, product__vendor__id=vendor_id)
        return qs
    
#Vendor Order Item List
class VendorOrderItemList(generics.ListAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

    def get_queryset(self):
        qs = super.get_queryset(self)
        vendor_id = self.kwargs['pk']
        qs = qs.filter(product__vendor__id=vendor_id)
        return qs

 #Vendor Customers order item connected to product and product to vendor
class VendorCustomerList(generics.ListAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

    def get_queryset(self):
        qs = super.get_queryset(self)
        vendor_id = self.kwargs['pk']
        qs = qs.filter(product__vendor__id=vendor_id)
        return qs
    
#VendorCustomerOrderItemList   
             
#Customer address
class CustomerAddressViewSet(viewsets.ModelViewSet):
    #queryset = OrderItem.objects.all()
    # A viewset for viewing and editing user instances. get or post instead of list or create
    serializer_class = CustomerAddressSerializer
    queryset = CustomerAddress.objects.all()

    def get_queryset(self):
        qs = super.get_queryset(self)
        customer_id = self.kwargs['pk']
        qs = qs.filter(customer__id=customer_id).order_by('id')
        return qs
    

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

@csrf_exempt
def vendor_change_password(request, vendor_id):
    password = request.POST.get('password')
    vendor = Vendor.objects.get(id=vendor_id)
    user = vendor.user
    user.password = make_password(password)
    user.save()

    msg={
        'bool':True,
        'msg': 'Passowrd has been changed'
        }

    return JsonResponse(msg)

@csrf_exempt
def customer_change_password(request, customer_id):
    password = request.POST.get('password')
    customer = Customer.objects.get(id=customer_id)
    user = customer.user
    user.password = make_password(password)
    user.save()

    msg={
        'bool':True,
        'msg': 'Passowrd has been changed'
        }

    return JsonResponse(msg)

##ORDER Modify
class OrderModify(generics.RetrieveUpdateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


@csrf_exempt
def update_order_status(request, order_id):
    if request.method == 'POST':
        updateRes = Order.object.filter(id=order_id).update(order_status=True)
        msg={
            'bool':False,
        }
        if updateRes:
            msg={
                'bool':True,
            }
        return JsonResponse(msg)
    
@csrf_exempt
def delete_customer_orders(request,customer_id):
    if request.method=='DELETE':
        #product_id = request.POST.get('product')
        orders = Order.objects.filter(customer_id=customer_id).delete()
        msg={
            'bool':False
        }
        # if checkCompare>0:
        #     msg={
        #         'bool':True
        #     }
        if orders>0:
            msg={
                'bool':True
            }
    return JsonResponse(msg)

    # customer_id=pk
    # totalOrders=Order.objects.filter(customer_id=customer_id).count()
    # totalCompare=Compare.objects.filter(customer_id=customer_id).count()
    # totalAddress=CustomerAddress.objects.filter(customer_id=customer_id).count()

    # msg={
    #     'totalOrders':totalOrders,
    #     'totalComapre':totalCompare,
    #     'totalAddress':totalAddress,
    # }
    # return JsonResponse(msg)
def vendor_dashboard(request,pk):
    vendor_id=pk
    totalProducts=Product.objects.filter(vendor__id=vendor_id).count()
    totalOrders=OrderItem.objects.filter(product__vendor__id=vendor_id).count()
    totalCustomers=OrderItem.objects.filter(product__vendor__id=vendor_id).values('order__customer').count()

    msg={
        'totalOrders':totalOrders,
        'totalComapre':totalCompare,
        'totalAddress':totalAddress,
    }
    return JsonResponse(msg)
    
