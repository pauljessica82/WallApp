from rest_framework.test import APITestCase, APIClient
from django.urls import reverse


class TestPostSetUp(APITestCase):
    def setUp(self):
        self.post_url = reverse('post-list')
        self.post_data = {
            'caption': "test post",
            'image': data

        }
        return super().setUp()

    def tearDown(self):
        return super().tearDown()
