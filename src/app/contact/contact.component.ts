import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
sendEmail() {
throw new Error('Method not implemented.');
}
  ngOnInit(): void {
   
  }
  contactForm!: FormGroup;

  initForm(){

    this.contactForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'subject': new FormControl('', Validators.required),
      'message': new FormControl('', Validators.required)
    })
  
  }

}
