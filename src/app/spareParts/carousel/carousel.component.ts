import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/_services/api.service';
import { Observable, map, switchMap } from 'rxjs';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'ecf-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  comments$!: Observable<Comment[]>;
  commentsList!: Comment[];

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    const apiUrl = `comments`;
    this.comments$ = this.apiService.getList(apiUrl).pipe(
      map((commentsList: any) => 
        this.commentsList = commentsList['hydra:member']
        )
    )

  }
}
