
from rest_framework import serializers 
from .models import *
import pandas as pd
 
 


class MaterialienSerializer(serializers.ModelSerializer):
 
    class Meta:
        #model = pd.read_csv("tabelleExport.csv", sep=';', decimal=',', encoding='latin1')
        model = Materialien
        
        fields = [field.name for field in Materialien._meta.get_fields()]
#        fields = '__all__'

    """def getFields(self, declared_fields):
        return super(KunststoffeSerializer, self).get_field_names(declared_fields);
     
        fields = ('name',
                  'handelsname',
                  'verfahren',
                  'firmeneigen',
                  'fachbezeichnung',
                  'waermeformbestaendigkeit',
                  'glasuebergangstemp',
                  'temp_kalt',
                  'temperaturbestaendig', 
                  'festigkeit', 
                  'haerte', 
                  'bruchfest', 
                  'dichte', 
                  'wandstaerke', 

                  'elastisch',
                  'lebensmittelecht',
                  'transparent', 
                  'uvbestaendig', 
                  'witterungsbestaendig', 
                  'langlebig', 
                  'umweltvertraeglich', 
                  'biokompatibel',
                  'chemisch_bestaendig', 
                  'oele_bestaendig',
                  'feuchtigkeits_bestaendig', 
                  'abrieb_bestaendig', 
                  'sterilisierbar', 
                  'entflammbar', 
                  
                  #'kosten', 
                  #'nachbearbeitung', 
                  'verwendung', 
    
                  'vorteile', 
                  'nachteile' 
                  
              
                  )"""
