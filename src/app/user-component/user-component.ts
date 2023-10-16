import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from '../Models';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.html',
  styleUrls: ['./user-component.scss']
})
export class UserComponent {

  

  alumnos: Alumno[] = [{
    id:1,
    name: 'diego',
    lastName: 'tapia',
    country: 'chile',
    email: 'correo@gmail.com',
    phone: '97185913'
  }]
  constructor(private matDialog: MatDialog){

  }


  openUserDialog(): void{
    this.matDialog.open(UserDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) =>{
        console.log(v);
        if(!!v){
          this.alumnos = [
            ...this.alumnos,
            {
              ...v,
              id: new Date().getTime(),
            }
          ]
        }
      }
    });
  }

  onEditUser(alumno: Alumno): void {
this.matDialog.open(UserDialogComponent,{data: alumno,}).afterClosed().subscribe({
  next: (v) => {
    if(!!v){
      const arrayNuevo = [...this.alumnos]

      const indicetoEdit = arrayNuevo.findIndex((u) => u.id === alumno.id)
      arrayNuevo[indicetoEdit]  = {...arrayNuevo[indicetoEdit], ...v};

      this.alumnos = [...arrayNuevo]
    }
  }
})
  }

  onDeleteUser(userId: number):void{
    this.alumnos = this.alumnos.filter((u) =>u.id !== userId)
      }
}

