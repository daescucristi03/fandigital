import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { OurStoryComponent } from '../../components/sections/our-story/our-story.component';
import { BestSellersComponent } from '../../components/sections/best-sellers/best-sellers.component';
import { ContactComponent } from '../misc/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
