from rest_framework import serializers

from .models import Article, Author, Course, User


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = [
            "title",
            "author",
            "difficulty",
            "cost",
            "content"
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'first_name',
            'last_name',
        ]

class AuthorSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Author
        fields = [
            'user',
            'position_title',
            'image',
            'description'
        ]

class ArticleSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
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