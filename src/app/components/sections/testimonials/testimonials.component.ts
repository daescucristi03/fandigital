import { Component } from '@angular/core';

interface Testimonial {
  text: string;
  author: string;
}
@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

  testimonials = [
    {
      text: "Might buy the company and fire everybody next week (:. Fire retro comics, tho. ",
      author: "Elon Musk"
    },
    {
      text: "Figurines so hot, they burned a hole in the christmass tree decorations",
      author: "Fuego"
    },
    {
      text: "Bought the entire collection. Twice. What color is your collection of retro shit, brokie?",
      author: "Andrew Tate"
    }
  ];
}

