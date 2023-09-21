import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatrialModule } from './matrial.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    MatrialModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports:[
    HttpClientModule,
    BrowserModule,
    RouterModule,
    MatrialModule,
    CommonModule,
    NavbarComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
