import django_filters
from .models import *

class MaterialFilter(django_filters.FilterSet):
    waermeformbestaendigkeit = django_filters.NumberFilter(field_name='waermeformbestaendigkeit', lookup_expr='gte')
    haerte = django_filters.NumberFilter(field_name='haerte', lookup_expr='gte')
    wandstaerke = django_filters.NumberFilter(field_name='wandstaerke', lookup_expr='lte')
    dichte = django_filters.NumberFilter(field_name='dichte', lookup_expr='lte')


    
    class Meta:
        model = Materialien

        fields = [field.name for field in Materialien._meta.get_fields()]
