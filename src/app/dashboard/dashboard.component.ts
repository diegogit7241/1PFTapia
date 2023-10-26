import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Observable, of } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  showFiller = false;
  $options!: Observable<string[]>;

  ngOnInit(): void {
    this.$options = of(['Crear Cursos', 'Inscribir Cursos'])
  }
}
