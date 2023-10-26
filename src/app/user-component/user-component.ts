import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from '../Models';
import { StudentService } from '../student.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.html',
  styleUrls: ['./user-component.scss']
})
export class UserComponent {

  alumnos: Alumno[] = [];

  constructor(private matDialog: MatDialog,
    private studentsService: StudentService){
    this.alumnos = this.studentsService.getStudents();
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
    if(confirm("Esta seguro que desea eliminar este registro?"))
    this.alumnos = this.alumnos.filter((u) =>u.id !== userId)
      }
}

