import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from 'src/app/spareParts/form/form.component';
import { ListItemsComponent } from 'src/app/spareParts/list-items/list-items.component';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'ecf-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ListItemsComponent, 
    FormComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  panelRequested$!: Observable<string>;
  



  getThisPanel(value: string) {
    this.panelRequested$ = of(value);
  }
}
