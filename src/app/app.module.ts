import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; //modulo de rotas
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //formulário

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/autenticacao/login/login.component';
import { EsqueciSenhaComponent } from './components/autenticacao/esqueci-senha/esqueci-senha.component';
import { LogoutComponent } from './components/autenticacao/logout/logout.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //modulo de rotas
    FormsModule, //formulário
    ReactiveFormsModule //formulário
  ],
  providers: [],
  bootstrap: [AppComponent] //Componente que carrega na entrada
})
export class AppModule { }