# Generated by Django 3.2 on 2021-05-04 08:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lolp1', '0018_contact_date_posted'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='date_posted',
            new_name='date',
        ),
    ]
