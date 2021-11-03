from .models import tehtava
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

def index(request):
    ruoat = tehtava.objects.all()
    context = {'ruoat': ruoat,}
    return render(request, 'kalorilaskuri/index.html', context)