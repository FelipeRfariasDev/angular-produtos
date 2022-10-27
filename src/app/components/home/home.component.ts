import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  title = 'Seja Bem Vindo';
  msgUsuarioLogado:any;

  ngOnInit():void
  {
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken && accessToken=='wRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'){
      this.msgUsuarioLogado = ' Usuário logado com accessToken: '+accessToken;
    }else{
      this.msgUsuarioLogado = 'Usuário não está logado';
    }
  }
}