from django.shortcuts import render
from django.contrib.auth.hashers import make_password,check_password
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User,Task
from .serializers.user_serializer import UserSerializer
from .serializers.task_serializer import TaskSerializer
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.parsers import JSONParser


class UserList(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class CreateUser(APIView):
    def post(self, request):
        
        request.data['password'] = make_password(request.data['password'])
        email = request.data.get('email', '')
        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginUser(APIView):
    def post(self, request):
        email = request.data.get('email', '')
        password = request.data.get('password', '')       
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

        if not check_password(password, user.password):
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

        
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_200_OK)



class CreateTask(APIView):
    def post(self, request):
        data = request.data
        serializer = TaskSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class GetUserTasks(APIView):
    def get(self, request, user_email, format=None):
        tasks = Task.objects.all()
        print(user_email)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)
