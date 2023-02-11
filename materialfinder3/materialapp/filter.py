import django_filters
from .models import *

class MaterialFilter(django_filters.FilterSet):
    class Meta:
        model = Materialien
        fields = [field.name for field in Materialien._meta.get_fields()]
