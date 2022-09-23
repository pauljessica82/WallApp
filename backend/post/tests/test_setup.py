from rest_framework.test import APITestCase, APIClient
from django.urls import reverse

from PIL import Image

import io


class TestSetUp(APITestCase):
    def setUp(self):
        self.post_url = reverse('posts_list')
        # Create image
        self.file = io.BytesIO()
        self.image = Image.new('RGBA', size=(100, 100), color=(155, 0, 0))
        self.image.save(self.file, 'png')
        self.file.name = 'test.png'
        self.file.seek(0)

        self.post_data = {
            'caption': "test post",
            'image': self.file,
        }

        return super().setUp()

    def tearDown(self):
        return super().tearDown()
