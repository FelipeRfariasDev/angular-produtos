import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css'],
})
export class EsqueciSenhaComponent {
  title = 'Esqueci Senha';

  email:any = '';

  form = new FormGroup({
    email: new FormControl('', Validators.required),
  });

  esqueci_senha() {
    this.email = this.form.get('email')?.value;
    if(this.email=='felipe@gmail.com'){
      console.log('LINK DE RECUPERAÇÃO ENVIADO PARA SEU EMAIL');
    } else {
      console.log('USUÁRIO NAO ENCONTRADO');
    }
    console.log('email: ' + this.email);
    const formData: any = new FormData();
    formData.append('email', this.email);
    console.log(formData);
    //formData será enviado via post para api
  }
}