from django.contrib import admin 

from .models import tehtava

class TehtavaAdmin(admin.ModelAdmin):
    fields = ["ruoka", "kalori_per_100g"]



admin.site.register(tehtava, TehtavaAdmin)