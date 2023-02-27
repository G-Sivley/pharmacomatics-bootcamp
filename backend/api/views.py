from rest_framework import viewsets
from rest_framework import permissions

from .serializers import ArticleSerializer, AuthorSerializer, CourseSerializer, UserSerializer
from .models import Article, Author, Course, User


class ArticleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows articles to be viewed or edited
    """

    queryset = Article.objects.all().order_by('-date_created')
    serializer_class = ArticleSerializer
    permissions_classes = [permissions.IsAuthenticated]

    def article_photos(request):
        pass


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all().order_by('-description')
    serializer_class = AuthorSerializer
    permissions_classes = [permissions.IsAuthenticated]


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all().order_by('-title')
    serializer_class = CourseSerializer
    permissions_classes = [permissions.IsAuthenticated]


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-email')
    serializer_class = UserSerializer
    permissions_classes = [permissions.IsAuthenticated]