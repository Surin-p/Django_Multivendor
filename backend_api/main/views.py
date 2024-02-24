from rest_framework import generics, permissions, pagination, viewsets
from .models import Vendor, Product, Customer,Order, OrderItem, CustomerAddress, ProductRating, ProductCategory
from .serializers import VendorSerializer, VendorDetailSerializer
from .serializers import ProductListSerializer, ProductDetailSerializer, ProductRatingSerializer
from .serializers import CustomerDetailSerializer, CustomerSerializer, CustomerAddressSerializer
from .serializers import OrderSerializer, OrderDetailSerializer
from .serializers import CategorySerializer, CategoryDetailSerializer

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

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer


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

    def get_queryset(self):
        order_id=self.kwargs['pk']
        order = Order.objects.get(id=order_id)
        order_items = OrderItem.objects.filter(order=order)
        return order_items


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
 