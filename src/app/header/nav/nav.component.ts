import { ChangeDetectorRef, Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ecf-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive, 
    RouterLink,

  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  screenWidth!: number;

  isMenuOpen!: boolean;

  constructor (
    private cdr: ChangeDetectorRef
  ){}


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
    this.isMenuOpen = (this.screenWidth >800)?true:false;


  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.isMenuOpen = (this.screenWidth >800)?true:false;
    this.cdr.detectChanges();
  }
}
