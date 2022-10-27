import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  title = 'Seja Bem Vindo';

  ngOnInit():void{
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken){
      console.log(' Usuário Locado com accessToken: '+accessToken);
    }
  }
}