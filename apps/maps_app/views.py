#Add default index routing, e.g.:
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import *
import urllib, json


def index(request):
    
    response = urllib.request.urlopen('http://www.cityoftulsa.org/apps/opendata/tfd_dispatch.jsn')
    str_response = response.read().decode('utf-8')
    obj = json.loads(str_response)
    context = {
        "dispatches": obj['Incidents']['Incident']
    }

    return render(request, 'maps_app/index.html', context)


def list(request):
    response = urllib.request.urlopen('http://www.cityoftulsa.org/apps/opendata/tfd_dispatch.jsn')
    str_response = response.read().decode('utf-8')
    obj = json.loads(str_response)
    context = {
        "dispatches": obj['Incidents']['Incident']
    }

    return render(request, 'maps_app/list.html', context)
