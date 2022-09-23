from rest_framework.test import APITestCase, APIClient
from django.urls import reverse


class TestSetUp(APITestCase):

    def setUp(self):
        self.register_url = reverse('auth_register')
        self.login_url = reverse('token_obtain_pair')
        # self.post_url = reverse('post-list')
        self.user_data = {
            'first_name': "test",
            'last_name': "user",
            # use email value from https://temp-mail.org/en or other "real" email
            'email': "kisifat435@dnitem.com",
            'username': "email",
            'password': "testing123@",
        }

        # self.post_data = {
        #     'caption': "test post",
        #
        #
        # }

        return super().setUp()

    def tearDown(self):
        return super().tearDown()
