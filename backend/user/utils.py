from email.message import EmailMessage
import ssl
import smtplib
import os


class Util:
    @staticmethod
    def send_email(data):
        #  replace with your email credentials
        email_sender = os.getenv("EMAIL_HOST_USER")
        email_password = os.getenv("EMAIL_HOST_PASSWORD")

        email_receiver = data['to_email']
        subject = data['email_subject']
        body = data['email_body']

        em = EmailMessage()
        em['From'] = email_sender
        em['To'] = email_receiver
        em['Subject'] = subject
        em.set_content(body)

        context = ssl.create_default_context()

        with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
            smtp.starttls(context=context)
            smtp.login(email_sender, email_password)

            smtp.sendmail(email_sender, email_receiver, em.as_string())
            smtp.set_debuglevel(1)

