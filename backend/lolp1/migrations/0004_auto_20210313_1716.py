# Generated by Django 3.1.1 on 2021-03-13 11:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lolp1', '0003_auto_20210313_1645'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='userid',
            new_name='username',
        ),
    ]
