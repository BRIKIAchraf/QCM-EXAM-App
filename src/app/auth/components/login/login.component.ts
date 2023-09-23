import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  students: any[] = [];
  loginForm!: FormGroup;
  type: string = "students";
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toaster: ToastrService) {

  }
  ngOnInit(): void {
    this.getUsers();
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      type: [this.type],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  getRole(event: any) {
    this.type = event.value
    this.getUsers();
  }


  getUsers() {
    this.authService.getUsers(this.type).subscribe((res: any) => {
      this.students = res;
      //console.log(this.students);
    })


  }
