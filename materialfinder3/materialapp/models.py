
from django.db import models
import pandas as pd


class Tutorial(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    published = models.BooleanField(default=False)

class Kunststoffe(models.Model):
     name = models.CharField(max_length = 200, default='')
     fachbezeichnung = models.CharField(max_length=100)
     handelsname = models.CharField(max_length=50)
     #verfahren
     firmeneigen = models.BooleanField(default=0)
     #waermeformbestaendigkeit = models.IntegerField()
     #glasuebergangstemp = models.IntegerField()
     #temp_kalt = models.IntegerField()
     temperaturbestaendig = models.BooleanField(default= 0)
     festigkeit = models.BooleanField(default= 0)
     bruchfest = models.BooleanField(default= 0)
     #dichte = models.DecimalField(decimal_places = 2, max_digits=5)
     #wandstaerke = models.DecimalField(decimal_places = 2,max_digits=5)
     elastisch = models.BooleanField(default= 0)






     class Meta:
        db_table = 'materialapp_kunststoffe'
        managed = False