import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldParam } from '../models/form-param';


import { Car } from '../models/Car';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  today: Date = new Date();
  car!: Car;

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }


  createFormContact(value: string): FormGroup {
    switch (value) {
      case 'contact':
        return this.fb.group({
          subject: ['', Validators.required],
          name: ['', Validators.required],
          firstname: ['', [Validators.required, Validators.email]],
          mail: ['', Validators.required],
          phone: ['', Validators.required],
          message: ['', Validators.required],
        });
      case 'cars':
        return this.fb.group({
          brand: ['', Validators.required],
          model: ['', [Validators.required, Validators.email]],
          km: ['', Validators.required],
          price: ['', Validators.required],
          dateReleased: ['', Validators.required],
        });
      case 'users':
        return this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          roles: ['', Validators.required],
        });
      default:
        return this.fb.group({
          subject: ['', Validators.required],
          name: ['', Validators.required],
          firstname: ['', [Validators.required, Validators.email]],
          mail: ['', Validators.required],
          phone: ['', Validators.required],
          message: ['', Validators.required],
        });

    }

}

setFieldForm(value: string): FieldParam[] {
  let fields!: FieldParam[];
  switch(value) {
    case 'contact':
      fields = [
        { type: 'text', name: 'subject', label: 'Sujet', validation: { required: true } },
        { type: 'text', name: 'name', label: 'Nom', validation: { required: true } },
        { type: 'text', name: 'firstname', label: 'Prénom', validation: { required: true } },
        { type: 'email', name: 'mail', label: 'Email', validation: { required: true } },
        { type: 'number', name: 'phone', label: 'Téléphone', validation: { required: true } },
        { type: 'text', name: 'message', label: 'Message', validation: { required: true } },
      ]
      return fields;
    
    case 'cars':
      fields = [
        { type: 'text', name: 'brand', label: 'Marque', validation: { required: true } },
        { type: 'text', name: 'model', label: 'Model', validation: { required: true } },
        { type: 'number', name: 'km', label: 'Km', validation: { required: true } },
        { type: 'number', name: 'price', label: 'Prix', validation: { required: true } },
        { type: 'text', name: 'dateReleased', label: 'Année', validation: { required: true } },
      ]
      return fields;
    
    case 'users':
      fields = [
        { type: 'text', name: 'email', label: 'Email', validation: { required: true } },
        { type: 'text', name: 'roles', label: 'Roles', validation: { required: true } },
      ]
      return fields;

    default:
      fields = [
        { type: 'text', name: 'subject', label: 'Sujet', validation: { required: true } },
        { type: 'text', name: 'name', label: 'Nom', validation: { required: true } },
        { type: 'text', name: 'firstname', label: 'Prénom', validation: { required: true } },
        { type: 'email', name: 'mail', label: 'Email', validation: { required: true } },
        { type: 'number', name: 'phone', label: 'Téléphone', validation: { required: true } },
        { type: 'text', name: 'message', label: 'Message', validation: { required: true } },
      ]
      return fields;
  }

}

dataShaper(data: any, dataType: string){
  switch(dataType){
    case 'cars':
      return this.car = {
        id: null,
        brand: data.brand,
        model: data.model,
        km: +data.km,
        price: +data.price,
        dateCar: 'string',
        picture: 'string',
        description: 'string',
        id_seller_id: '',

      }

    default:
      return
  }

}



}
