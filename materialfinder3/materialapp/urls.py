
from django.urls import re_path

from . import views 
 
urlpatterns = [ 
    re_path(r'^api/tutorials$', views.tutorial_list),
    re_path(r'^api/tutorials/(?P<pk>[0-9]+)$', views.tutorial_detail),
    re_path(r'^api/tutorials/published$', views.tutorial_list_published),


    re_path(r'^api/materialien', views.materialien_list),
    re_path(r'^api/search?', views.materialien_search),
    re_path(r'^api/materialien/(?P<pk>[0-9]+)$', views.materialien_detail),

]
