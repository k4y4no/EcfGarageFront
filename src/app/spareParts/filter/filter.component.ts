import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecf-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {


  @Output() kmFilter = new EventEmitter<number>();
  @Output() priceFilter = new EventEmitter<number>();


  kmFilterValue!: any;
  priceFilterValue!: any;
  typeKmData!: string;
  typePriceData!: string;
  previousValueKm: number = 1300000;
  previousValuePrice: number = 1300000;


  filter(data: string, dataType: string) {
    clearTimeout(this.kmFilterValue);
    clearTimeout(this.priceFilterValue);

    if (dataType === 'km') {
      this.kmFilterValue = setTimeout(() => {
        if (+data !== this.previousValueKm) {
          this.previousValueKm = +data;

          this.kmFilter.emit(this.previousValueKm);
        }
      }, 300);
    } else if (dataType === 'price') {
      this.priceFilterValue = setTimeout(() => {
        if (+data !== this.previousValuePrice) {
          this.previousValuePrice = +data;

          this.priceFilter.emit(this.previousValuePrice);
        }
      }, 300);
    }
  }


}
