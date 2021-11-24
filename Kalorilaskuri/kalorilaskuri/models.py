from django.db import models  


class tehtava(models.Model):
    ruoka = models.CharField(max_length=200)
    kalori_per_100g = models.IntegerField()
    

    def __str__(self):
        return self.ruoka


class Tekstit(models.Model):
    nimi = models.CharField(max_length=50)
    teksti = models.CharField(max_length=1000)

    def __str__(self):
        return self.nimi