import { Injectable } from '@angular/core';
import { Alumno } from './Models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Alumno[]{
    return [{
      id:1,
      name: 'diego',
      lastName: 'tapia',
      country: 'chile',
      email: 'correo@gmail.com',
      phone: '97185913'
    }];
  }
}
