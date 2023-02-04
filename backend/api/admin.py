from django.contrib import admin

# Register your models here.

from .models import Article, Author, Course, User


admin.site.register(Article)
admin.site.register(Author)
admin.site.register(Course)
admin.site.register(User)
