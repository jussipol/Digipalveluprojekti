from django.db import models  


class tehtava(models.Model):
    ruoka = models.CharField(max_length=200)
    kalori_per_100g = models.IntegerField()

    def __str__(self):
        return self.ruoka