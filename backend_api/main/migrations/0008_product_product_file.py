# Generated by Django 5.0.3 on 2024-04-06 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0007_customer_profile_img_vendor_phone_vendor_profile_img"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="product_file",
            field=models.FileField(null=True, upload_to="product_files/"),
        ),
    ]
