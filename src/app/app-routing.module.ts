import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/autenticacao/login/login.component';
import { EsqueciSenhaComponent } from './components/autenticacao/esqueci-senha/esqueci-senha.component';
import { LogoutComponent } from './components/autenticacao/logout/logout.component';
import { ListarProdutosComponent } from './components/produtos/listar/listar-produtos.component';
import { AdicionarProdutosComponent } from './components/produtos/adicionar/adicionar-produtos.component';
import { AlterarProdutosComponent } from './components/produtos/alterar/alterar-produtos.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'listar-produtos', component: ListarProdutosComponent },
  { path: 'adicionar-produtos', component: AdicionarProdutosComponent },
  { path: 'alterar-produtos', component: AlterarProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}