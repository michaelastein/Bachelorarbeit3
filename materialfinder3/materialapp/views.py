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






@api_view(['GET', 'POST'])
def materialien_list(request):
   
    if request.method == 'GET':
         # Antwortet mit einer Liste aller Materialien
        materials = Materialien.objects.all()
       
        material_serializer = MaterialienSerializer(materials, many=True)
        return JsonResponse(material_serializer.data, safe=False)
    
        # 'safe=False' for objects serialization
    elif request.method == 'POST':
         # Es können mit POST auch neue Materialien hinzugefügt werden
        materials_data = JSONParser().parse(request)
        material_serializer = MaterialienSerializer(data=materials_data)
        if material_serializer.is_valid():
            material_serializer.save()
            return JsonResponse(material_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(material_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
 


    
@api_view(['GET'])
def materialien_search(request):
    # Eine Liste mit allen Materialien, 
    # die zu den übergebenen Parametern passen, wird zurückgegeben
    
        filter = MaterialFilter(request.GET, queryset=Materialien.objects.all())
        ser = serializers.serialize('json',filter.qs )
        
       
        ser = json.loads(ser);
        list = []
        count = 0
        while (count < len(ser)):
                list.append(ser[count]['fields'])
                count = count +1
                
        
        return JsonResponse( list, safe = False)
    

   