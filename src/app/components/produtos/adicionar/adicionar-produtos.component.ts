import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-adicionar-produtos.component',
  templateUrl: './adicionar-produtos.component.html'
})
export class AdicionarProdutosComponent {

  title='Adicionar Produto';

  nome: any;
  descricao: any;
  
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required)
  });

  constructor(private produtosService: ProdutosService, private router: Router) {}

  add() {

    this.nome = this.form.get('nome')?.value;
    this.descricao = this.form.get('descricao')?.value;

    const formProduto = new FormData();
    formProduto.append('nome', this.nome);
    formProduto.append('descricao', this.descricao);

    this.produtosService.post(formProduto).subscribe((response:any)=>{
      // tratamento se deu erro ou sucesso console.log(response);
      this.router.navigateByUrl('/listar-produtos');
    });
  }
}