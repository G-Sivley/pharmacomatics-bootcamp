from django.db import models

# Create your models here.


# A model to represent users on the site
class User(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=50)
    
    # This returns the user email instead of <User0001>
    def __str__(self):
        return self.email
    

# Article model
class Article(models.Model):
    title = models.CharField(max_length=50, unique=True)
    subtitle = models.CharField(max_length=100)
    date_created = models.DateField(auto_now_add=True)

    # Need to link with user
    author = models.CharField(max_length=50)

    content = models.TextField()
    likes = models.PositiveSmallIntegerField(default=1)

    def __str__(self):
        return self.title