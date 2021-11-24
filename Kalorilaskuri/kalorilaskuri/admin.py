from django.contrib import admin 

from .models import tehtava
from .models import Tekstit

class TehtavaAdmin(admin.ModelAdmin):
    fields = ["ruoka", "kalori_per_100g"]



admin.site.register(tehtava, TehtavaAdmin)

class TekstiAdmin(admin.ModelAdmin):
    fields = ["nimi", "teksti"]

admin.site.register(Tekstit, TekstiAdmin)