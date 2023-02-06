from rest_framework import serializers

from .models import Article, Author, Course, User


class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = [
            'title',
            'img',
            'subtitle',
            'date_created',
            'author',
            'content',
            'likes'
        ]


class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(view_name='user-detail', queryset=User.objects.all())
    class Meta:
        model = Author
        fields = [
            'user',
            'position_title',
            'image',
            'description'
        ]


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = [
            "title",
            "author",
            "difficulty",
            "cost",
            "content"
        ]


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = [
            'first_name',
            'last_name',
            'email',
            'password'
        ]