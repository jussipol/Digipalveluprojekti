from django.db import models  


class tehtava(models.Model):
    ruoka = models.CharField(max_length=200)
   
    def __str__(self):
        return self.ruoka