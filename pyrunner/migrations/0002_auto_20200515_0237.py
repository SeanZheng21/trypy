# Generated by Django 3.0.4 on 2020-05-15 02:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('pyrunner', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='code',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='codes', to=settings.AUTH_USER_MODEL),
        ),
    ]
