using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading;

namespace MySubs.Domain.Common
{
    public class EmailService
    {

        private const string EMAIL_BOAS_VINDAS = "Você acaba de dar o primeiro passo, seja bem vindo :)";
        private const string EMAIL_RECUPERAR_SENHA = "Nova senha temporária :)";

        public static void SendEmail(EmailTypeEnum emailType, string email, string password = "", string name = "")
        {
            try
            {
                switch (emailType)
                {
                    case EmailTypeEnum.NewUser:
                        SendEmailNewUser(email);
                        break;
                    case EmailTypeEnum.ForgotPassword:
                        SendForgotPassword(email, password, name);
                        break;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private static void  SendEmailNewUser(string email)
        {
            string body = TemplatesEmail.GetNewUser();

            Thread thread = new Thread(() => SendEmail(email, body, EMAIL_BOAS_VINDAS));

            thread.Start();
        }

        private static void  SendForgotPassword(string email, string password, string name)
        {
            string body = TemplatesEmail.GetForgotPassword().Replace("{{password}}", password).Replace("{{name}}", name);

            Thread thread = new Thread(() => SendEmail(email, body, EMAIL_RECUPERAR_SENHA));

            thread.Start();
        }

        private static void  SendEmail(string email, string body, string subject)
        {
            MailMessage mail = new MailMessage();

            mail.From = new MailAddress("kamila_zacarioto@hotmail.com");
            mail.To.Add(email);
            mail.Subject = subject;
            mail.Body = body;
            mail.IsBodyHtml = true;

            using (var smtp = new SmtpClient("smtp.live.com"))
            {
                smtp.EnableSsl = true;
                smtp.Port = 587;

                smtp.Credentials = new NetworkCredential("kamila_zacarioto@hotmail.com", "Legiao555@Kah");

                smtp.Send(mail);
            }
        }
    }
}
