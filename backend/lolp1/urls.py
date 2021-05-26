from django.urls import path,include
# from .views import article_list,article_details
from .views import UserViewSet,ArticleViewSet,ContactViewSet
from rest_framework.routers import DefaultRouter
from .views import login,dates
from lolp1 import views
from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth import views as auth_views



# ArticleList,ArticleDetails,
router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet, basename='users')
router.register('contacts', ContactViewSet, basename='contact')


urlpatterns = [
    #Oauth2
    path('auth/', include('rest_framework_social_oauth2.urls' )),

    path('lolp1/',include(router.urls)),
    path('login/', views.login),
    path('dates/',views.dates),
    path('reset_password/',auth_views.PasswordResetView.as_view(), name='reset_password'),
    path('reset_password_sent/',auth_views.PasswordChangeDoneView.as_view(),name='password_reset_done'),
    path('reset_password/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name='password_reset_confirm'),
    path('reset_password_complete/',auth_views.PasswordResetCompleteView.as_view() , name='password_reset_complete'),
  
    # url(r'^article/savefile$',views.SaveFile)
    # path('Empolyee/SaveFile/',views.SaveFile)
    # path('articles/',ArticleList.as_view()),
    # path('articles/<int:id>/',ArticleDetails.as_view()),
#     path('articles/',article_list),
#     path('articles/<int:pk>',article_details),
    #  
    
] +static(settings.MEDTA_URL,document_root=settings.MEDIA_ROOT)
