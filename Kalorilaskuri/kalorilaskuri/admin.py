from django.contrib import admin 

from .models import tehtava

class TehtavaAdmin(admin.ModelAdmin):
    fields = ["ruoka"]



admin.site.register(tehtava, TehtavaAdmin)