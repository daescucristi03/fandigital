import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: false,
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.css'
})
export class CursorComponent {
  x = 0; // main cursor
  y = 0;

  innerX = 0; // trailing circle
  innerY = 0;

  isClicking = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  @HostListener('document:mousedown')
  onMouseDown() {
    this.isClicking = true;
    setTimeout(() => this.isClicking = false, 150);
  }

  ngAfterViewInit() {
    const animate = () => {
      // Inner circle smoothly moves toward main cursor
      this.innerX += (this.x - this.innerX) * 0.15; // 0.15 = delay speed
      this.innerY += (this.y - this.innerY) * 0.15;
      requestAnimationFrame(animate);
    };
    animate();
  }
}
