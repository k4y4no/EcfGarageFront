import { Component,Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from 'src/app/_services/form.service';
import { ApiService } from 'src/app/_services/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldParam } from 'src/app/models/form-param';


@Component({
  selector: 'ecf-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() formTemplate!: string;
  @Input() randomData!: string|null;

  contactForm!: FormGroup;
  fieldForm!: FieldParam[];

  isReadOnly: boolean = false;

  url!: string;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.url = this.router.url;

    this.contactForm = this.formService.createFormContact(this.formTemplate);
    this.fieldForm = this.formService.setFieldForm(this.formTemplate);

    if (this.randomData) {
      this.contactForm.patchValue({subject: this.randomData});
      this.isReadOnly = true;
    }
  }

  // onSubmit() {
  //   let data!: any;

  //   data = this.formService.dataShaper(this.contactForm.value, 'cars'); 
  //   this.apiService.addData(data).subscribe(
  //     (response) => {
  //       console.log('Données envoyées avec succès !', response);
  //       // Ajoutez ici toute autre logique ou redirection après envoi réussi.
  //     },
  //     (error) => {
  //       console.error('Erreur lors de l\'envoi des données :', error);
  //       // Ajoutez ici toute logique de gestion d'erreur.
  //     }
  //   );
  //   console.log(data)
  // }

}
