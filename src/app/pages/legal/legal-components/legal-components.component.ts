import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-components',
  standalone: false,
  templateUrl: './legal-components.component.html',
  styleUrl: './legal-components.component.css'
})
export class LegalComponentsComponent {
  company = {
    name: 'Fan Digital S.R.L.',
    address: 'Our address, lol',
    vat: 'RO694208008',
    email: 'contact@fandigital.com',
  };
}
