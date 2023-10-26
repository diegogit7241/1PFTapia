import { Component, OnInit } from '@angular/core';
import { Observable, of, timeout, timer } from 'rxjs';
import { Alumno } from 'src/app/Models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

   mensaje = 'Cargando ...';
  loading = false;

  constructor(){
  const getStudentsPromise = new Promise((resolve, reject) =>{

    const students: Alumno[] =
    [{
      id:1,
      name: 'diego',
      lastName: 'tapia',
      country: 'chile',
      email: 'correo@gmail.com',
      phone: '97185913'
    }];

    setTimeout(() => {
      resolve(students)
    }, 5000);
       
  });
  this.loading = true;
  getStudentsPromise.
  then((result) => console.log(result))
  .finally( () =>{this.loading = false;})
}




}
