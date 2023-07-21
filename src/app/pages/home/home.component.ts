import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from 'src/app/spareParts/list-items/list-items.component';
import { CarouselComponent } from 'src/app/spareParts/carousel/carousel.component';

@Component({
  selector: 'ecf-home',
  standalone: true,
  imports: [
    CommonModule,
    ListItemsComponent,
    CarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
