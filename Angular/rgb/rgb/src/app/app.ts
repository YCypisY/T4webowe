import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Point {
    x: number;
    y: number;
    r:number;
  }

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  r:number = 128;
  g:number = 128;
  b:number = 128;
  

  kolor(): string{
    return `rgb(${this.r}, ${this.g}, ${this.b}`
  }

  
  closed: boolean = false;
  points: Point[] = [];
  lines: Line[] = [];

  onCanvasClick(event: MouseEvent): void {
    if (this.closed) return;

    const svg = event.currentTarget as SVGElement;
    const rect = svg.getBoundingClientRect();

    const point = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      r: 0
    };

    if (this.points.length === 0) {
      point.r = 40;
      this.points.push(point);
      return;
    }

    const first = this.points[0];

    const distance = Math.sqrt(
      (point.x - first.x) ** 2 +
      (point.y - first.y) ** 2
    );

    if (distance < first.r) {
      const previous = this.points[this.points.length - 1];

      this.lines.push({
        x1: previous.x,
        y1: previous.y,
        x2: first.x,
        y2: first.y
      });

      this.closed = true;

      return;
    }

    const previous = this.points[this.points.length - 1];

    this.lines.push({
      x1: previous.x,
      y1: previous.y,
      x2: point.x,
      y2: point.y
    });

    this.points.push(point);
  }

}
