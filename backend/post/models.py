from django.db import models


class Post(models.Model):
    caption = models.TextField()
    image = models.ImageField(upload_to='post_images')

    def __str__(self):
        return self.caption
