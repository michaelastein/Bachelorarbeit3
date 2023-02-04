
from django.db import models
import pandas as pd


class Tutorial(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    published = models.BooleanField(default=False)

class Kunststoffe(models.Model):
    name = models.CharField(max_length=50)
    fachbezeichnung = models.CharField(max_length=100, blank=True)
    handelsname = models.CharField(max_length=50, blank=True)
    FDM = 'FDM'
    FFF = 'FFF'
    SLS = 'SLS'
    POLYJET = 'POLYJET'
    SLA='SLA'
    DLS='DLS'
    DLP='DLP'
    choices_verfahren = [(FDM, 'FDM'),(FFF,'FFF'),(SLS,'SLS'),(POLYJET,'Polyjet'),(SLA,'SLA'),(DLS,'DLS'),(DLP,'DLP')]
    verfahren = models.TextField(choices= choices_verfahren, blank=True)
    firmeneigen = models.BooleanField(default=False, blank=True)

    waermeformbestaendigkeit = models.IntegerField( blank=True)
    glasuebergangstemp = models.IntegerField(blank=True)
    temp_kalt = models.IntegerField(blank=True)
    temperaturbestaendig = models.BooleanField(default= False, blank=True)
    festigkeit = models.BooleanField(default=False, blank=True)
    haerte = models.IntegerField( blank=True)
    bruchfest = models.BooleanField(default=False, blank=True)
    dichte = models.DecimalField(decimal_places = 2, max_digits=5, blank=True, default = -1)
    wandstaerke = models.DecimalField(decimal_places = 2,max_digits=5, blank=True)
    choices_elastisch = [('nein','nein'),('etwas','etwas'), ('normal', 'normal'), ('hoch', 'hoch'),('sehr hoch','sehr hoch')]

    elastisch = models.TextField(choices= choices_elastisch, default= 'nein')
    lebensmittelecht = models.BooleanField(default = False)
    transparent = models.BooleanField(default = False)
    uvbestaendig = models.BooleanField(default = False)
    witterungsbestaendig = models.BooleanField(default = False)
    langlebig = models.BooleanField(default = False)
    umweltvertraeglich = models.BooleanField(default = False)
    biokompatibel = models.BooleanField(default = False)
    chemisch_bestaendig = models.BooleanField(default = False)
    oele_bestaendig = models.BooleanField(default = False)
    feuchtigkeits_bestaendig = models.BooleanField(default = False)
    abrieb_bestaendig = models.BooleanField(default = False)
    korrosion_bestaendig = models.BooleanField(default = False)
    sterilisierbar = models.BooleanField(default = False)
    choices_entflammbar = [('nein', 'nein'), ('schwer', 'schwer'),('feuerbestaendig','feuerbestaendig')]
    entflammbar = models.TextField(choices = choices_entflammbar, default = 'nein')
    choices_kosten = [('normal', 'normal'), ('hoch', 'hoch'),('niedrig','niedrig')]
    kosten = models.TextField(choices = choices_kosten, default = 'normal')
    nachbearbeitung = models.BooleanField(default = False)
    verwendung = models.TextField(blank = True)
    #'Automobil', 'Luftfahrt', 'Raumfahrt', 'Medizin', 'Prototypen', 'Maschinen','Elektronik','Sport','Werkzeuge','Modelle','Endprodukte','Kleinserien','Halterungen','Gehause','Tiefziehwerkzeuge','Fertigung', 'Spritzguss','Zahnmedizin','Schmuck','Fahrrad'
    bereiche = models.TextField(default= "default")
    vorteile = models.TextField(blank = True)
    nachteile = models.TextField(blank = True)