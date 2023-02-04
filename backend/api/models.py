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