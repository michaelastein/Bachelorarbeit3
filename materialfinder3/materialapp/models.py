
from django.db import models
import pandas as pd

#Model für die Datenbank zu den Materialien. 
#Hier müssen alle Kategorien mit Datentyp definiert werden

class Materialien(models.Model):
     name = models.CharField(max_length = 200, default='')
     materialart =  models.CharField(max_length = 200, default='')
     fachbezeichnung = models.CharField(max_length=100)
     handelsname = models.CharField(max_length=50)
     verfahren = models.TextField()
     firmeneigen = models.BooleanField(default=0)
     waermeformbestaendigkeit = models.IntegerField()
     haerte = models.CharField(max_length=5)
     haerte_hv = models.CharField(max_length=5)

     glasuebergangstemp = models.IntegerField()
     schmelzpunkt = models.IntegerField()
     temp_warm = models.IntegerField()
     temp_kalt = models.IntegerField()
     temperaturbestaendig = models.BooleanField(default= 0)
     festigkeit = models.BooleanField(default= 0)
     bruchfest = models.BooleanField(default= 0)
     dichte = models.DecimalField(decimal_places = 2, max_digits=5)
     wandstaerke = models.DecimalField(decimal_places = 2,max_digits=5)
     elastisch = models.BooleanField(default= 0)
     lebensmittelecht = models.BooleanField(default = 0)
     transparent = models.BooleanField(default = 0)
     uvbestaendig = models.BooleanField(default = 0)
     witterungsbestaendig = models.BooleanField(default = 0)
     korrosionsbestaendig = models.BooleanField(default = 0)

     langlebig = models.BooleanField(default = 0)
     umweltvertraeglich = models.BooleanField(default = 0)
     biokompatibel = models.BooleanField(default = 0)
     chemisch_bestaendig = models.BooleanField(default = 0)
     oele_bestaendig = models.BooleanField(default = 0)
     feuchtigkeits_bestaendig = models.BooleanField(default = 0)
     abrieb_bestaendig = models.BooleanField(default = 0)
     sterilisierbar = models.BooleanField(default = 0)
     entflammbar = models.BooleanField(default = 0)
     bereiche = models.TextField()
     verwendung = models.TextField()
     vorteile = models.TextField()
     nachteile = models.TextField()






     class Meta:
        # Django managed die Datenbanktabelle nicht, 
        # da bereits vorliegende Daten der Tabelle 'materialapp_kunststoffe' genutzt werden
        # Dadurch werden auch keine Migrationen benötigt
        db_table = 'materialapp_kunststoffe'
        managed = False