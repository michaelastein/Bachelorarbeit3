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
   
    waermeformbestaendigkeit = django_filters.NumberFilter(field_name='waermeformbestaendigkeit', lookup_expr='gte')
    haerte = django_filters.NumberFilter(field_name='haerte', lookup_expr='gte')
    wandstaerke = django_filters.NumberFilter(field_name='wandstaerke', lookup_expr='lte')
    dichte = django_filters.NumberFilter(field_name='dichte', lookup_expr='lte')
    name = django_filters.CharFilter(lookup_expr='icontains')
    verfahren = django_filters.AllValuesMultipleFilter(lookup_expr='icontains', choices = verfahren_CHOICES)

     
    class Meta:
        model = Materialien

        fields = [field.name for field in Materialien._meta.get_fields()]
