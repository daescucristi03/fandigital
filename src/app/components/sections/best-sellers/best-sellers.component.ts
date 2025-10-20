import { Component } from '@angular/core';

interface Product {
  image: string;
  title: string;
  price: string;
  description: string;
  badge?: string;
}

@Component({
  selector: 'app-best-sellers',
  standalone: false,
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css'
})
export class BestSellersComponent {
  products: Product[] = [
    {
      image: 'assets/products/product1.jpg',
      title: 'Super Cool Widget',
      price: '$49.99',
      description: 'A fun, comic-style product everyone will love!',
      badge: 'NEW!'
    },
    {
      image: 'assets/products/product2.jpg',
      title: 'Mega Fun Gadget',
      price: '$59.99',
      description: 'Turn every day into a comic adventure!',
      badge: 'HOT!'
    },
    {
      image: 'assets/products/product3.jpg',
      title: 'Ultimate Gizmo',
      price: '$39.99',
      description: 'Perfect for collectors and comic lovers!'
    }
    // Add more products here
  ];
}
