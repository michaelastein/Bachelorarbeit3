
from rest_framework import serializers 
from .models import *
import pandas as pd
 
 
class TutorialSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tutorial
        fields = ('id',
                  'title',
                  'description',
                  'published')

class KunststoffeSerializer(serializers.ModelSerializer):
 
    class Meta:
        #model = pd.read_csv("tabelleExport.csv", sep=';', decimal=',', encoding='latin1')
        model = Kunststoffe
        
#       fields = Kunststoffe._meta.get_fields
        fields = '__all__'




        """
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
