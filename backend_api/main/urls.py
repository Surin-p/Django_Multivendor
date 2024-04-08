from django.urls import path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('address', views.CustomerAddressViewSet)
router.register('productrating', views.ProductRatingViewSet)

urlpatterns=[
    #VENDORS
    path('vendors/', views.VendorList.as_view()),
    path('vendor/<int:pk>/', views.VendorDetail.as_view()),
    path('vendor/login/', views.VendorLogin, name='vendor_login'),
    path('vendor/register/', views.VendorRegister, name='vendor_register'),
    path('vendor/<int:pk>/orderitems', views.VendorOrderItemList, name='vendor_order_items'),
    #Products 
    path('products/', views.ProductList.as_view()),
    path('product/<int:pk>/', views.ProductDetail.as_view()),
    path('products-imgs/', views.ProductImgsList.as_view()),
    path('products-imgs/<int:product_id>/', views.ProductImgsList.as_view()),
    path('product-img/<int:pk>/', views.ProductImgsDetail.as_view()),
    #Customers
    path('customers/', views.CustomerList.as_view()),
    path('customer/<int:pk>/', views.CustomerDetail.as_view()),
    path('customer/login/', views.CustomerLogin, name='customer_login'),
    path('customer/register/', views.CustomerRegister, name='customer_register'),
    #Orders
    path('orders/', views.OrderList.as_view()),
    path('order/<int:pk>', views.OrderDetail.as_view()),
    path('orderitems/<int:pk>', views.OrderItemList.as_view()),

    #Categories
    path('categories/', views.CategoryList.as_view()),
    path('category/<int:pk>/', views.CategoryDetail.as_view()),

]

urlpatterns+=router.urls

