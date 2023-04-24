import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    contraseña : new FormControl('',Validators.required)
  })

  login(){
    console.log(this.loginForm.value);
  }
}
