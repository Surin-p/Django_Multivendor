from django.contrib import admin
from . import models
#Admin@12 :password, user:Admin
admin.site.register(models.Vendor)
admin.site.register(models.ProductCategory)
#admin.site.register(models.Product)

admin.site.register(models.OrderItem)

admin.site.register(models.CustomerAddress)
admin.site.register(models.ProductRating)

admin.site.register(models.ProductImage)

#this add separately
class ProductImagesInLine(admin.TabularInline):
    model = models.ProductImage

class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    inlines = [ProductImagesInLine]

admin.site.register(models.Product, ProductAdmin)

class CustomerAdmin(admin.ModelAdmin):
    list_display = ['get_username', 'phone']
    def get_username(self, obj):
        return obj.user.username
admin.site.register(models.Customer, CustomerAdmin)


class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'customer', 'order_time', 'order_status']

admin.site.register(models.Order, OrderAdmin)

class CompareAdmin(admin.ModelAdmin):
    list_display = ['id', 'product', 'customer']

admin.site.register(models.Compare, CompareAdmin)