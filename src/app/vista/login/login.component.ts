import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/modelos/response.interface';
import { DataApiJuegoService } from 'src/app/servicios/data-api-juego.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  errorStatus!:boolean
  errorMsj!:string;

  constructor (private dataApiJuegoService:DataApiJuegoService, private router:Router){}

  login(form:any){
    this.dataApiJuegoService.Login(form).subscribe({
      next: (s) =>{
        this.router.navigate(['Dashboard']);
      },
      error: (err) =>{
        this.errorStatus = true;
        this.errorMsj = err.error.message;
        debugger;
      }
    })
  }
}
