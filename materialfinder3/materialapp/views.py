import json
from django.shortcuts import render
from .models import *
from .serializers import *
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from .filter import MaterialFilter

from django.http.response import JsonResponse
 
from django.core import serializers
from rest_framework.decorators import api_view


# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def tutorial_list(request):
    # GET list of tutorials, POST a new tutorial, DELETE all tutorials
    if request.method == 'GET':
        tutorials = Tutorial.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            tutorials = tutorials.filter(title__icontains=title)
        
        tutorials_serializer = TutorialSerializer(tutorials, many=True)
        return JsonResponse(tutorials_serializer.data, safe=False)
        # 'safe=False' for objects serialization
    elif request.method == 'POST':
        tutorial_data = JSONParser().parse(request)
        tutorial_serializer = TutorialSerializer(data=tutorial_data)
        if tutorial_serializer.is_valid():
            tutorial_serializer.save()
            return JsonResponse(tutorial_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def tutorial_detail(request, pk):
    # find tutorial by pk (id)
    try: 
        tutorial = Tutorial.objects.get(pk=pk) 
    except Tutorial.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    # GET / PUT / DELETE tutorial
    if request.method == 'GET': 
        tutorial_serializer = TutorialSerializer(tutorial) 
        return JsonResponse(tutorial_serializer.data)
    elif request.method == 'PUT': 
        tutorial_data = JSONParser().parse(request) 
        tutorial_serializer = TutorialSerializer(tutorial, data=tutorial_data) 
        if tutorial_serializer.is_valid(): 
            tutorial_serializer.save() 
            return JsonResponse(tutorial_serializer.data) 
        return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE': 
        tutorial.delete() 
        return JsonResponse({'message': 'Tutorial was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'DELETE':
        count = Tutorial.objects.all().delete()
        return JsonResponse({'message': '{} Tutorials were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)    



@api_view(['GET'])
def tutorial_list_published(request):
    # GET all published tutorials
    tutorials = Tutorial.objects.filter(published=True)
        
    if request.method == 'GET': 
        tutorials_serializer = TutorialSerializer(tutorials, many=True)
        return JsonResponse(tutorials_serializer.data, safe=False)



####################################

@api_view(['GET', 'POST', 'DELETE'])
def materialien_list(request):
    # GET list of materialien, POST a new tutorial, DELETE all materialien
    if request.method == 'GET':
        materials = Materialien.objects.all()
        
        #name = request.GET.filter('name', None)  #get?
        #if name is not None:
        #    materials = materials.filter(name__icontains=name)
        
       
                  
                  


        
        kunststoffe_serializer = MaterialienSerializer(materials, many=True)
        return JsonResponse(kunststoffe_serializer.data, safe=False)
    
        # 'safe=False' for objects serialization
    elif request.method == 'POST':
        materials_data = JSONParser().parse(request)
        kunststoffe_serializer = MaterialienSerializer(data=materials_data)
        if kunststoffe_serializer.is_valid():
            kunststoffe_serializer.save()
            return JsonResponse(kunststoffe_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(kunststoffe_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def materialien_detail(request, pk):
    # find tutorial by pk (id)
    try: 
        material = Materialien.objects.get(id=pk) 
    except Materialien.DoesNotExist: 
        return JsonResponse({'message': 'The material does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    # GET / PUT / DELETE tutorial
    if request.method == 'GET': 
        materialien_serializer = MaterialienSerializer(material) 
        return JsonResponse(materialien_serializer.data)


    
@api_view(['GET'])
def materialien_search(request):
    # GET list of materials with theses attributes
    
        filter = MaterialFilter(request.GET, queryset=Materialien.objects.all())
        ser = serializers.serialize('json',filter.qs )
        #materialien_serializer = MaterialienSerializer(filter, many=True)
        return JsonResponse( ser, safe = False)
    
        # 'safe=False' for objects serialization
   