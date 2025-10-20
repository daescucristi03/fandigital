import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-container',
  standalone: false,
  templateUrl: './horizontal-container.component.html',
  styleUrl: './horizontal-container.component.css'
})
export class HorizontalContainerComponent {
  @Input() maxColumns: number = 3; // default max columns
  @Input() gap: string = '1rem'; // gap between items
}
