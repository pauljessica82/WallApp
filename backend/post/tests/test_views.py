import pdb

import smtplib
import tempfile

from PIL import Image

from .test_setup import TestPostSetUp


class PostViews(TestPostSetUp):
    def test_post_photo(self):

        # Create image
        image = Image.new('RGB', (100, 100))
        tmp_file = tempfile.NamedTemporaryFile(suffix='.jpg')
        image.save(tmp_file)

        # Send data
        with open(tmp_file.name, 'rb') as data:
            res = self.client.post(self.post_url, (self.post_data['caption'],
                                                   {'image': data}), format='multipart')
            self.assertEqual(res.status_code, 201)
