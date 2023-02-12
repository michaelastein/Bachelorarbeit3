import django_filters
from .models import *

class MaterialFilter(django_filters.FilterSet):
    waerme__gte = django_filters.NumberFilter(field_name='waermeformbestaendigkeit', lookup_expr='gte')
    haerte__gte = django_filters.NumberFilter(field_name='haerte', lookup_expr='gte')
    wandstaerke__lte = django_filters.NumberFilter(field_name='wandstaerke', lookup_expr='lte')
    dichte__lte = django_filters.NumberFilter(field_name='dichte', lookup_expr='lte')


    
    class Meta:
        model = Materialien
        fields = [field.name for field in Materialien._meta.get_fields()]
