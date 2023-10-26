import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullNamePipe } from '../shared/pipes/full-name.pipe';
import {MatTableModule} from '@angular/material/table';
import { UserTAbleComponent } from '../user-table/user-table.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { UserComponent } from '../user-component/user-component';
import { ThFontsDirective } from '../th-fonts.directive';
import { HomeComponent } from '../home/home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DashboardComponent, 
    FullNamePipe,
    UserTAbleComponent,
    UserDialogComponent,
    UserComponent,
    ThFontsDirective,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule
    
  ],
  exports: [DashboardComponent,FullNamePipe,UserTAbleComponent,UserDialogComponent,UserComponent,ThFontsDirective,HomeComponent],
})
export class DashboardModule { }
