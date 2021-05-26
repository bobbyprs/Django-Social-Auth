from django.contrib import admin
from .models import Article,Contact
# Register your models here.
# admin.site.register(Article)

@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter=('owner','title','description',)
    list_display=('owner','title','description',)
@admin.register(Contact)
class ContactModel(admin.ModelAdmin):
    list_filter=('First_name','Last_name','email','Message','date')
    list_display = ('First_name','Last_name','email','Message','date')