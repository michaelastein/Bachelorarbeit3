
from rest_framework import serializers 
from .models import *
 
 
class TutorialSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tutorial
        fields = ('id',
                  'title',
                  'description',
                  'published')

class KunststoffeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Kunststoffe
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
                  'korrosion_bestaendig', 
                  'sterilisierbar', 
                  'entflammbar', 
                  
                  'kosten', 
                  'nachbearbeitung', 
                  'verwendung', 
    
                  'vorteile', 
                  'nachteile' 
                  
                  
                  
                  
                  
                  
                  
                  )
