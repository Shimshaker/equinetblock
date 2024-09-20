import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  constructor() { }

  sendEmail(contactForm: any): Promise<EmailJSResponseStatus> {
    const formData = {
      user_name: contactForm.email, // L'email de l'utilisateur
      message: contactForm.message, // Le message de l'utilisateur
      subject: contactForm.subject  // Le sujet de l'utilisateur
    };

    return emailjs.send('service_csj0a72', 'template_hagnf0n', formData, '_9Fe3MU2t8dC7xO_9');
  }
}
