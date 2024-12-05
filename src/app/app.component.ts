import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({

  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular';
  passengers: any;
  ngOnInit(): void {
    this.passengers = [
      {
        name: 'John',
        age: 25,
        gender: 'Male'
      },
      {
        name: 'Jane',
        age: 30,
        gender: 'Female'
      },
      {
        name: 'Bob',
        age: 35,
        gender: 'Male'
      },
      {
        name: 'Alice',
        age: 20,
        gender: 'Female'
      }
    ]
  }
}
