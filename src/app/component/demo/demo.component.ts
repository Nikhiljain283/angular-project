import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  title = 'first-ang-project';
  imgUrl= "../assets/logo.jpg"
  message: String='hello from bridgelabz'
}
