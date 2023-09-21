import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm !:FormGroup;
  constructor(private fb:FormBuilder) {
  }
  ngOnInit(): void {
   this.creatForm();
  }
  creatForm(){
    this.userForm = this.fb.group({
  username:['',[Validators.required]],
  email:['',[Validators.required , Validators.email]],
  password:['',[Validators.required]],
  confirmPassword:['',[Validators.required]],
    })
  }
  submit(){
    const model = { // je preparer le model qui va passer au base de donne , et qui requiper le valeur de de champ
      username:this.userForm.value.username, // et pour recuper le value de chaque champ
      email:this.userForm.value.email,
      password:this.userForm.value.password,
    }
  }

}
