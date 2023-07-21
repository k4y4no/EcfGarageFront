import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { Activity } from 'src/app/models/Activity';

@Component({
  selector: 'ecf-car-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {
  @Input() car!: Car|undefined;
  @Input() activity!: Activity|undefined;


  constructor (
    private router: Router
  ){}


  goToCar(car: Car) {
    console.table(car)
    this.router.navigate([ '/cars',car.id]);
  }
}
