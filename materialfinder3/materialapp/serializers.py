
from rest_framework import serializers 
from .models import *
import pandas as pd
 
 

# Serializer Klasse, um Instanzen von Materialien in String umzuwandeln.
# Es wird die Oberklasse ModelSerializer benutzt und alle Fields von Materialien übergeben
class MaterialienSerializer(serializers.ModelSerializer):
 
    
    class Meta:
        model = Materialien
        
        fields = [field.name for field in Materialien._meta.get_fields()]

    
