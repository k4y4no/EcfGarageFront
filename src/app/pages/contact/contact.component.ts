import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from 'src/app/spareParts/form/form.component';

@Component({
  selector: 'ecf-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

}
