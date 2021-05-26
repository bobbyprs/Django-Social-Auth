from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
# Create your models here.




class Article(models.Model):
    owner =models.ForeignKey('auth.User',on_delete=models.CASCADE,related_name='posts',)
    title =models.CharField(max_length=100)
    description=models.TextField(max_length=400)
       

    def __str__(self):
        return self.title

class Contact(models.Model):
    First_name =models.CharField(max_length=100)
    Last_name =models.CharField(max_length=100)
    email=models.EmailField(max_length=100 , blank=False)
    Message=models.TextField(max_length=400)
    date =models.DateTimeField(verbose_name='date_posted',auto_now_add=True)

    def __str__(self):
        return self.email
