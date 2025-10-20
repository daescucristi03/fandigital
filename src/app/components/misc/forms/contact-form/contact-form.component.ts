import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  ticket = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  successMessage = '';

  submitTicket() {
    // Replace this with your backend API call
    console.log('Ticket submitted', this.ticket);
    this.successMessage = "Your message has been sent! We'll reply soon.";
    this.ticket = { name: '', email: '', subject: '', message: '' };
  }
}
