import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from '../Models';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  userForm: FormGroup;


  constructor(private fb: FormBuilder, 
    private matDialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private alumno?: Alumno){
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      lastName: ['',Validators.required],
      country: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.maxLength(10)]]
    })

    if(this.alumno){
    this.userForm.patchValue(this.alumno);
    }
  }

  

  onSubmit(): void {
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userForm.value);

    }
    
  }
 

  
}
