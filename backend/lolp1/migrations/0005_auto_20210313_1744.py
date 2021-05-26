# Generated by Django 3.1.1 on 2021-03-13 12:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('lolp1', '0004_auto_20210313_1716'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='username',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='auth.user'),
        ),
    ]