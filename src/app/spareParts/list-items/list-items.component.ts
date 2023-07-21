import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map, BehaviorSubject, switchMap } from 'rxjs';
import { ApiService } from 'src/app/_services/api.service';
import { Router } from '@angular/router';
import { CarCardComponent } from '../car-card/car-card.component';
import { Car } from 'src/app/models/Car';
import { Activity } from 'src/app/models/Activity';
import { User } from 'src/app/models/User';
import { PaginationComponent } from '../pagination/pagination.component';
import { DataTableComponent } from '../data-table/data-table.component';


@Component({
  selector: 'ecf-list-items',
  standalone: true,
  imports: [
    CommonModule,
    CarCardComponent,
    PaginationComponent,
    DataTableComponent
  ],
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent  implements OnInit {
  currentPage$ = new BehaviorSubject<number>(1);
  @Input() kmFilterValue!: number;
  @Input() priceFilterValue!: number;
  @Input() entityUrl!: string;
  @Input() panelRequested!: string;

  lastPageCars!: string;
  lastPageUsers!: string;
  lastPageComments!: string;

  cars$!: Observable<Car[]>;
  users$!: Observable<User[]>;
  activities$!: Observable<Activity[]>;
  comments$!: Observable<Comment[]>;
  checklist!: any;
  lastPage!: string;
  url!: string;
  carFilter: string = `price%5Blte%5D=${this.priceFilterValue}&km%5Blte%5D=${this.kmFilterValue}`;
  urlFiltered!: string;
  currentPage!: string;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this.lastPageCars = '';
    this.lastPageUsers = '';
    this.lastPageComments = '';
  }


  ngOnInit(): void {
    this.currentPage = this.router.url;


    this.cars$ = this.fetchCars();
    this.users$ = this.fetchUsers();
    this.activities$ = this.fetchActivities();
    this.comments$ = this.fetchComments();
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['kmFilterValue'] || changes['priceFilterValue']) {
      this.updateFilteredCars();
    }
  }

  setUrlPage(page: number): string {
    return `page=${page}`;
  }


  fetchWithPagination(url: string, lastpage: string|undefined): Observable<any> {
    return this.currentPage$.pipe(
      switchMap(page => {
        const urlPage = this.setUrlPage(page);
        const urlWithPagination = url + urlPage;
        return this.apiService.getList(urlWithPagination).pipe(
          map((checkList: any) => {
            this.checklist = checkList['hydra:member'];
            if(checkList['hydra:view']) {
              switch (lastpage) {
                case 'users':
                  this.lastPageUsers = checkList['hydra:view']['hydra:last'];
                  break;
                case 'cars':
                  this.lastPageCars = checkList['hydra:view']['hydra:last'];
                  break;
                case 'comments':
                  this.lastPageComments = checkList['hydra:view']['hydra:last'];
                  break;

              }

              console.log(lastpage)
            }
            return this.checklist;
          })
        );
      })
    );
  }


  fetchCars(): Observable<Car[]> {
    const carsUrl = this.router.url === '/cars'
    ? `cars?${this.carFilter}`
    : 'cars?';
    return this.fetchWithPagination(carsUrl, 'cars');
  }

  fetchUsers(): Observable<User[]> {
    const usersUrl = 'users?';
    return this.fetchWithPagination(usersUrl, 'users');
  }

  fetchActivities(): Observable<Activity[]> {
    const activitiesUrl = 'activities?';
    return this.fetchWithPagination(activitiesUrl, '');
  }


  fetchComments(): Observable<Comment[]> {
    const commentsUrl = 'comments?';
    return this.fetchWithPagination(commentsUrl, 'comments');
  }

  updateFilteredCars(): void {
    this.carFilter = `price%5Blte%5D=${this.priceFilterValue}&km%5Blte%5D=${this.kmFilterValue}&`;
    this.cars$ = this.fetchCars();
  }


  goToPage(url: string): void {
    this.currentPage$.next(+url);
    const apiUrl = `cars?page=${url}`;
    console.log(apiUrl);
  }

}
