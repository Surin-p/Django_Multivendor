# Generated by Django 5.0.3 on 2024-04-06 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0003_order_order_status"),
    ]

    operations = [
        migrations.AddField(
            model_name="productcategory",
            name="category_image",
            field=models.ImageField(null=True, upload_to="category_imgs/"),
        ),
    ]
