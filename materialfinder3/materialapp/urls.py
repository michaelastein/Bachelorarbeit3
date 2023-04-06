
from django.urls import re_path

from . import views 
 
urlpatterns = [ 

    #leitet ankommende HTTP-Nachrichten an die passende Methode in views weiter
    re_path(r'^api/materialien', views.materialien_list),
    re_path(r'^api/search?', views.materialien_search),

]
