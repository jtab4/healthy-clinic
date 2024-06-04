"""
URL configuration for taskmanager project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp.views import UserList
from myapp.views import CreateUser
from myapp.views import LoginUser
from myapp.views import CreateTask
from myapp.views import GetUserTasks

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/',UserList.as_view(), name="user_list"),
    path('create-user/', CreateUser.as_view(), name='create-user'),
    path('login/',LoginUser.as_view(),name="login"),
    path('create-task',CreateTask.as_view(),name="create-task"),
    path('get-tasks/<user_email>/',GetUserTasks.as_view(), name='get_user_tasks'),

   
]
