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
    path('vendor/<int:pk>/dashboard/', views.VendorDetail.as_view()),
    path('vendor-change-password/<int:vendor_id>/', views.vendor_change_password),
    path('vendor/login/', views.VendorLogin, name='vendor_login'),
    path('vendor/register/', views.VendorRegister, name='vendor_register'),
    path('vendor/<int:pk>/orderitems', views.VendorOrderItemList),
    path('vendor/<int:pk>/customers', views.VendorCustomerList),
    path('vendor/<int:vendor_id>/customer/<int:customer_id>/orderitems/', views.VendorCustomerOrderItemList.as_view()),
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
    path('customer-change-password/<int:customer_id>/', views.customer_change_password),
    #Orders
    path('orders/', views.OrderList.as_view()),
    path('order/<int:pk>', views.OrderDetail.as_view()),
    path('delete-customer-orders/<int:pk>', views.delete_customer_orders),
    path('order-modify/<int:pk>', views.OrderModify.as_view()),
    path('order-modify/<int:pk>', views.OrderModify.as_view()),
    path('orderitems/<int:pk>', views.OrderItemList.as_view()),
    path('customer/<int:pk>/orderitems/', views.CustomerOrderItemList.as_view()),
    path('update-order-status/<int:order_id>', views.update_order_status, name='update_order_staus'),

    #Categories
    path('categories/', views.CategoryList.as_view()),
    path('category/<int:pk>/', views.CategoryDetail.as_view()),

]

urlpatterns+=router.urls

