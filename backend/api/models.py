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
    

# Author Model
# Connect to both User and Article
class Author(models.Model):
    user = models.OneToOneField(
        User,
        primary_key=True,
        on_delete=models.RESTRICT
    )
    
    position_title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="files/author_photos")
    description = models.TextField(blank=False)

    def __str__(self):
        # Print First and Last name together
        return f"{self.user.first_name} {self.user.last_name}"

        
# Article model
class Article(models.Model):
    title = models.CharField(max_length=50, unique=True)
    img = models.ImageField(upload_to="files/article_photos")
    subtitle = models.CharField(max_length=100)
    date_created = models.DateField(auto_now_add=True)
    author = models.ForeignKey(Author, on_delete=models.RESTRICT)
    content = models.TextField()
    likes = models.PositiveSmallIntegerField(default=1, editable=False)

    def __str__(self):
        return self.title


# Course Model
class Course(models.Model):
    title = models.CharField(max_length=50, unique=True)
    author = models.ForeignKey(Author, on_delete=models.RESTRICT)
    # 0 to 10 rating
    difficulty = models.PositiveSmallIntegerField() 
    cost = models.PositiveSmallIntegerField(default=0)
    content = models.TextField()

    def __str__(self):
        return self.title