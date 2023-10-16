import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../Models';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTAbleComponent {
  @Input()
  dataSource: Alumno[] = [];

  @Output()
  deleteUser = new EventEmitter<number>()

  @Output()
  editUser = new EventEmitter<Alumno>()


  displayedColumns = ['id','name','lastName','email','country','phone','actions'];
}
