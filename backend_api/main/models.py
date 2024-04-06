from django.db import models
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify

# Create your models here.
#Vendor Models
class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(null =True)
    phone = models.PositiveBigIntegerField(unique=True, null=True)
    profile_img = models.ImageField(upload_to='school_imgs/', null=True)
    def __str__(self):
        return self.user.username



#Product Category
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    category_image = models.ImageField(upload_to='category_imgs/', null=True)
    def __str__(self):
        return self.title
    

#Product
class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True, related_name='category_products')
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length = 250, null = True, blank = True, unique=True)
    detail = models.TextField(null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    tags = models.TextField(null=True)
    image = models.ImageField(upload_to='product_imgs/', null=True)
    product_file = models.FileField(upload_to='product_files/', null=True)
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
    def tag_list(self):
        tagList = self.tags.split(',')
        return tagList
    
    

#customer model
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    phone = models.PositiveBigIntegerField(unique=True)
    profile_img = models.ImageField(upload_to='customer_imgs/', null=True)
    def __str__(self):
        return self.user.username
     
#object is created from order we can fetch order item using related names
#order model
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete = models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)
    order_status = models.BooleanField(default=False)
    def __str__(self):
        return '%s' % (self.order_time)
    
#order model
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete = models.CASCADE, related_name = 'order_items')
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    quantity = models.IntegerField(default=1)
    price = models.DecimalField(max_length=10, decimal_places=2, default=0, max_digits=20)

    def __str__(self):
        return self.product.title
     
#Customer Address Model
class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete = models.CASCADE, related_name = 'customer_addresses')
    address = models.TextField()
    default_address = models.BooleanField(default = False)

    def __str__(self):
        return self.address

#Product Rating and Reviews
class ProductRating(models.Model):
    customer = models.ForeignKey(Customer, on_delete= models.CASCADE, related_name = 'rating_customers')
    product = models.ForeignKey(Product, on_delete = models.CASCADE, related_name ="product_ratings")
    rating = models.IntegerField()
    reviews = models.TextField()
    add_time = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return f'{self.rating} . {self.reviews}'
#Product Imae
class ProductImage(models.Model):
    product= models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_imgs')
    image = models.ImageField(upload_to='product_imgs/', null=True)

    def __str__(self):
        return self.product.title
    
#Compare Model
class Compare(models.Model):
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete = models.CASCADE)

    class Meta:
        verbose_name_plural = 'Compare List'
    def __str__(self):
        return f"{self.product.title} - {self.customer.user.first_name}"
    