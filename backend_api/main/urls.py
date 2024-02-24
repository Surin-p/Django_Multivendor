from django.urls import path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('address', views.CustomerAddressViewSet)
router.register('productrating', views.ProductRatingViewSet)



urlpatterns = [
    ##VENDORS
    path('vendors/', views.VendorList.as_view()),
    path('vendors/<int:pk>/', views.VendorDetail.as_view()),
    ##PRODUCTS
    path('products/', views.ProductList.as_view()),
    path('products/<int:pk>/', views.ProductDetail.as_view()),
    ##CUSTOMERS
    path('customers/', views.CustomerList.as_view()),
    path('customers/<int:pk>/', views.CustomerDetail.as_view()),
    #ORDER
    path('orders/', views.OrderList.as_view()),
    path('orders/<int:pk>', views.OrderDetail.as_view()),

]
urlpatterns = router.urls

