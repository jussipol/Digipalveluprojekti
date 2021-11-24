from .models import Tekstit, tehtava
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

def index(request):
    ruoat = tehtava.objects.all()
    footerteksti = Tekstit.objects.get(nimi="footer")
    context = {'ruoat': ruoat, 'teksti': footerteksti}
    return render(request, 'kalorilaskuri/index.html', context)