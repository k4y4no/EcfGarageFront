import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecf-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent  implements OnInit{
  @Input() pages!: string;
  @Output() dataUrl = new EventEmitter();
  numberPages!: number;
  
  ngOnInit(): void {
    
    if (this.pages) {
        this.getNumberPages(this.pages);
    }
  }

  ngOnChanges(changes: SimpleChanges) {

    if(this.pages) {
      this.getNumberPages(this.pages);
    }
  }

  getNumberPages(pages: string) {
    const endIndex = pages.indexOf('page=');
    const subString = pages.substring(endIndex);
    let match = subString.match(/\d+/)
    console.log(match)
  
    if (match !== null) {
      this.numberPages = Number(match[0]);
      return
    }
    return console.error('something went wrong');
  }

  getPages(pages: number) {
    const array = Array.from(Array(pages).keys(), index => index + 1);
  
    return array;
  
  }


  linkClick(page: number) {

    this.dataUrl.emit(page);
    console.log(page);
  }



}
