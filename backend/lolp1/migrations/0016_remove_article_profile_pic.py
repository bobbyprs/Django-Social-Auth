# Generated by Django 3.1.7 on 2021-03-19 14:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lolp1', '0015_article_profile_pic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='profile_pic',
        ),
    ]