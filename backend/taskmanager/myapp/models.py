from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from datetime import date

class Task(models.Model):
    name = models.CharField(default="",max_length=100)
    level = models.CharField(default="easy",max_length=100)
    deadline = models.DateField(default=date.today) 
    def __str__(self):
        return self.name, self.level,self.deadline



class User(models.Model):
    email = models.CharField(max_length=100)
    password=models.CharField(max_length=1000)
    def __str__(self):
        return self.email, self.password