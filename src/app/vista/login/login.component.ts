import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  constructor (private dataApiJuegoService:DataApiJuegoService){}

  login(form:any){
    this.dataApiJuegoService.Login(form).subscribe({
      next: (s) =>{
        let dataResponse:ResponseI = s;
        console.log(dataResponse);
      },
      error: (err) =>{
        debugger;
      }
    })
  }
}
