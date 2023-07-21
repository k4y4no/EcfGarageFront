import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { Car } from 'src/app/models/Car';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';


@Component({
  selector: 'ecf-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  url: string = 'cars';
  car$!: Observable<Car>;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const carId: string|null = this.route.snapshot.paramMap.get('id');

    if(carId) {
      this.car$ = this.apiService.getById(this.url,carId)
      .pipe(
        map(car =>  car)
      )
    }

  }
}
