import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm !: FormGroup;
  students: any[] = []; // je cree un tableau vide pour stocker les donnees de la base de donne , lorsque je recuper tous les donner de db pour je peut faire le verification et par le loop
  constructor(private authService: AuthService, private fb: FormBuilder, private toaster: ToastrService, private router: Router) { }
  ngOnInit(): void {
    this.creatForm();
    this.getStudents();
  }
  creatForm() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    })
  }
  getStudents() {
    this.authService.getUsers().subscribe((res: any) => {
      this.students = res; // on affecter le response de get dans le variable
      //console.log(this.students);
    })
  }
  submit() {
    const model = { // je preparer le model qui va passer au base de donne , et qui requiper le valeur de de champ
      username: this.userForm.value.username, // et pour recuper le value de chaque champ
      email: this.userForm.value.email,
      password: this.userForm.value.password,
    }
    // pour le verification de email si il existe deja dans la base de donne
    let index = this.students.findIndex((student: any) => student.email === this.userForm.value.email); // je cherche si le email existe deja dans la base de donne avec un loop is egale il va me retourner le index si non il va me retroune -1
    if (index !== -1) {
      this.toaster.error('email already exist', "", {
        disableTimeOut: true,
        titleClass: 'toastr_title',
        messageClass: 'toastr_message',
        timeOut: 4000,
        closeButton: true,
      });
    } else {
      this.authService.createUser(model).subscribe((res: any) => {
        this.toaster.success('user created successfully', "", {
          disableTimeOut: true,
          titleClass: 'toastr_title',
          messageClass: 'toastr_message',
          timeOut: 4000,
          closeButton: true,
        });
        this.router.navigate(['/login']);
      })
    }
  }
}
