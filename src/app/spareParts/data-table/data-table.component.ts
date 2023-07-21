import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortIdPipe } from 'src/app/_pipes/short-id.pipe';

@Component({
  selector: 'ecf-data-table',
  standalone: true,
  imports: [
    CommonModule,
    ShortIdPipe
],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {

  @Input() data: any;
}
