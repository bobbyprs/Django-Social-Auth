from rest_framework import serializers
from .models import Article,Contact
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token
from django.contrib.auth.password_validation import validate_password


class ArticleSerializer(serializers.ModelSerializer):
    # title =serializers.CharField(max_length=100)
    # description=serializers.CharField(max_length=400)

    # def create(self, validated_data):
    #     return Article.objects.create(validated_data)

    # def update(self, instance, validated_data):
    #     instance.title=validated_data.get('title',instance.title)
    #     instance.description=validated_data.get('title',instance.description)
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model=Article
        fields = ['owner','id','title','description']
    # def createuserid(self,request):
    #     userid = User.objects.get(pk=request.user.id)

class ContactSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Contact
        fields = ['First_name','Last_name', 'email','Message']

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    posts = serializers.PrimaryKeyRelatedField(many=True,read_only=True)
    class Meta:
        model= User
        fields =['posts','id','username','email','password','firstname','lastname']
        extra_kwargs ={'password':{
            'write_only':True,
            'required':True
        },'firstname': {
            'required': True
        },'lastname': {
            'required': True
        }}
    # def validate(self,data):
    #     if data['password'] != data['password']:
    #         raise serializers.ValidationError({"password": "Password fields didn't match."})
    #     return data
    # def create(self, validated_data):
    #     user = User.objects.create(
    #         username=validated_data['username'],
    #         email=validated_data['email'],
    #         first_name=validated_data['first_name'],
    #         last_name=validated_data['last_name']
    #     )
    #     user.set_password(validated_data['password'])
    #     user.save()

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user