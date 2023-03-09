# -*- encoding: iso-8859-15 -*-

import django_filters
from .models import *

class MaterialFilter(django_filters.FilterSet):
    verfahren_CHOICES = (
    (0, 'FFF'),
    (1, 'FDM'),
    (2, 'SLA'),
    (3, 'SLS'),
    (4, 'SLM'),
    (5, 'Polyjet'),
    (6, 'DMLS'),
    (7, 'DLS'),
    (8, 'DLP'),

)

    material_CHOICES = (
    (0, 'Kunststoff'),
    (1, 'Metall'),
    (2, 'Resin'),
    (3, 'Verbund'),
    (4, 'Sonstige')
)

    bereiche_CHOICES = (
      (1,'Automobilbau'),
      (2,'Luft/Raumfahrt'),
      (   3,'Medizin'),
      (   4,'Prototypen'),
      (   5,'Maschinenbau' ),
      (   6, 'Elektroindustrie' ),
      (   9 ,'Werkzeug' ),
      (   10,  'Modelle' ),
      (   11,  'Endprodukte' ),
      (   12,  'Kleinserien' ),
      (   13,  'Halterungen' ),
      (   14,  'Gehäuse' ),
     
      (   15,  'Robotik' ),
    
      
    )
   
    temp_warm = django_filters.NumberFilter(field_name='temp_warm', lookup_expr='gte')
    haerte = django_filters.NumberFilter(field_name='haerte', lookup_expr='gte')
    haerte_hv = django_filters.NumberFilter(field_name='haerte_hv', lookup_expr='gte')
    wandstaerke = django_filters.NumberFilter(field_name='wandstaerke', lookup_expr='lte')
    dichte = django_filters.NumberFilter(field_name='dichte', lookup_expr='lte')
    name = django_filters.CharFilter(lookup_expr='icontains')
    verfahren = django_filters.AllValuesMultipleFilter(lookup_expr='icontains', choices = verfahren_CHOICES)
    bereiche = django_filters.AllValuesMultipleFilter(lookup_expr='icontains', choices = bereiche_CHOICES)
    materialart = django_filters.AllValuesMultipleFilter(lookup_expr='icontains', choices = material_CHOICES)

     
    class Meta:
        model = Materialien

        fields = [field.name for field in Materialien._meta.get_fields()]
