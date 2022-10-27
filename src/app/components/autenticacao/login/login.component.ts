import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Login';

  email: any;
  senha: any;
  msgErrorLogin: any;
  
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  });

  constructor(private router:Router) {}

  login() {

    this.email = this.form.get('email')?.value;
    this.senha = this.form.get('senha')?.value;

    if(this.email=='felipe@gmail.com' && this.senha=='123'){
      const formData: any = new FormData();
      formData.append('email', this.email);
      formData.append('senha', this.senha);
      console.log(formData);
      //formData será enviado via post para api
      localStorage.setItem('accessToken','wRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
      this.router.navigateByUrl('/home');
    } else {
      this.msgErrorLogin = 'ACESSO NEGADO';
    }
  }
}