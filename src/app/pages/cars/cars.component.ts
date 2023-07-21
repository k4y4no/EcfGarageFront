import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from 'src/app/spareParts/list-items/list-items.component';
import { FilterComponent } from 'src/app/spareParts/filter/filter.component';

@Component({
  selector: 'ecf-cars',
  standalone: true,
  imports: [
    CommonModule,
    ListItemsComponent,
    FilterComponent
  ],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  kmFilterValue: number = 100000;
  priceFilterValue: number = 100000;

  onKmFilter(value: any) {
    this.kmFilterValue = value;
  }

  onPriceFilter(value: any) {
    this.priceFilterValue = value;
  }
}
