# Generated by Django 4.1.5 on 2023-02-04 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("materialapp", "0004_alter_kunststoffe_dichte"),
    ]

    operations = [
        migrations.AddField(
            model_name="kunststoffe",
            name="bereiche",
            field=models.TextField(default="default"),
        ),
    ]
