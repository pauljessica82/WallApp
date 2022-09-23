import pdb

import smtplib

from .test_setup import TestSetUp


class TestViews(TestSetUp):
    def test_user_cannot_register_with_no_data(self):
        res = self.client.post(self.register_url)
        self.assertEqual(res.status_code, 400)

    # note the email value in test_setup. Update email_sender and email_password in utils.py.
    # You can use https://temp-mail.org/en to receive email
    def test_user_can_register_correctly(self):
        res = self.client.post(
            self.register_url, self.user_data, format="json")
        self.assertEqual(res.data['email'], self.user_data['email'])
        self.assertEqual(res.status_code, 201)

    def test_anon_user_cannot_login(self):
        res = self.client.post(self.login_url)
        self.assertEqual(res.status_code, 400)

    def test_user_can_login(self):
        res = self.client.post(
            self.register_url, self.user_data, format="json")
        self.assertEqual(res.data['email'], self.user_data['email'])
        self.assertEqual(res.status_code, 201)
        self.client.post(
            self.login_url, (res.data['username'], self.user_data['password']), format="json")

        self.assertEqual(res.status_code, 201)
