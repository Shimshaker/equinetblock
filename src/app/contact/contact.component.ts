import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { EmailserviceService } from '../services/emailservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
   
  }
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailserviceService) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  public sendEmail() {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value).then(() => {
        alert('Votre message a été envoyé avec succès !');
      }).catch(err => {
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      });
    }
  }
}
