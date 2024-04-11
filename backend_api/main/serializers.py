from rest_framework import serializers
from dataclasses import fields
from django.contrib.auth.models import User 
from . import models

###########VENDOR#######
class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id', 'user', 'address', 'phone', 'profile_img']

    def __init__(self, *args, **kwargs):
        super(VendorSerializer, self).__init__(*args, **kwargs)
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['user'] = UserSerializer(instance.user).data
        return response
        
class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id', 'user', 'address', 'phone', 'profile_img']

    def __init__(self, *args, **kwargs):
        super(VendorDetailSerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth = 1

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['user'] = UserSerializer(instance.user).data
        return response


###########CATEGORY#######
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id', 'title', 'detail', 'category_image']

    def __init__(self, *args, **kwargs):
        super(CategorySerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth = 1  
            
class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id','title', 'detail']

    def __init__(self, *args, **kwargs):
        super(CategoryDetailSerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth = 1

###########PRODUCT#######
class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = ['id', 'category','title', 'slug','tags','image','detail', 'price', 'vendor', 'product_ratings', 'product_imgs']

    def __init__(self, *args, **kwargs):
        super(ProductListSerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth = 1

#Product Rating
class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRating
        fields = ['id','customer', 'product', 'rating', 'reviews', 'add_time']

    def __init__(self, *args, **kwargs):
        super(ProductRatingSerializer, self).__init__(*args, **kwargs)

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['customer'] = CustomerSerializer(instance.customer).data
        response['product'] = ProductDetailSerializer(instance.product).data
        return response

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ProductImage
        fields=['id', 'product', 'image']

class ProductDetailSerializer(serializers.ModelSerializer):
    product_ratings= serializers.StringRelatedField(many=True, read_only=True)
    product_imgs=ProductImageSerializer(many=True, read_only=True)
    class Meta:
        many=True
        model = models.Product
        fields = ['id', 'category','title', 'slug','tags','image','detail', 'price', 'vendor', 'product_ratings', 'product_imgs']

    def __init__(self, *args, **kwargs):
        super(ProductDetailSerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth = 1
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id', 'first_name', 'last_name','username','email']
###########CUSTOMER#######
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id', 'user', 'phone','profile_img']

    def __init__(self, *args, **kwargs):
        super(CustomerSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
     
class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user', 'phone']
    
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['user'] = UserSerializer(instance.user).data
        return response

    # def __init__(self, *args, **kwargs):
    #     super(CustomerDetailSerializer, self).__init__(*args, **kwargs)
    #     #self.Meta.depth = 1
 
######ORDER#######
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ['id', 'customer', 'order_time', 'order_status']
    def __init__(self, *args, **kwargs):
            super(OrderSerializer, self).__init__(*args, **kwargs)
        
    def to_representation(self, instance):
            response = super().to_representation(instance)
            response['customer'] = CustomerSerializer(instance.customer).data
            return response

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItem
        fields = ['id','order', 'product']

    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth = 1

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItem
        fields = ['id','order', 'product', 'price', 'quantity']
    
    def to_representation(self, instance):
        response=super().to_representation(instance)
        response['order']=OrderSerializer(instance.order).data
        response['customer']=CustomerSerializer(instance.order.customer).data
        response['user']=UserSerializer(instance.order.custoner.user).data
        response['product']=ProductDetailSerializer(instance.product).data
        return response
    
#Customer Address
class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomerAddress
        fields = ['id','customer', 'address', 'default_address']

    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth = 1

# class CompareSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=models.Order
#         fields=['id','customer','product']

#         def __init__(self, *args, **kwargs):
#             super(OrderSerializer, self).__init__(*args, **kwargs)
        
#         def to_representation(self, instance):
#             response = super().to_representation(instance)
#             response['customer'] = CustomerSerializer(instance.customer).data
#             return response

class CompareSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Order
        fields=['id','customer','order_status','total_amount']

        def __init__(self, *args, **kwargs):
            super(OrderSerializer, self).__init__(*args, **kwargs)
        
        def to_representation(self, instance):
            response = super().to_representation(instance)
            response['customer'] = CustomerSerializer(instance.customer).data
            return response