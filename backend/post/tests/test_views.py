import os
import pdb

from .test_setup import TestSetUp


class TestViews(TestSetUp):
    def test_post_photo(self):
        res = self.client.post(self.post_url, self.post_data, format='multipart')
        self.assertEqual(res.status_code, 201)




