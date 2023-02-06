
from django.db import models
import pandas as pd


class Tutorial(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    published = models.BooleanField(default=False)

class Kunststoffe(models.Model):
     class Meta:
        db_table = 'materialapp_kunststoffe'
        managed = False