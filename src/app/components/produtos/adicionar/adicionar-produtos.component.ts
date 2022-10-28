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
  
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required)
  });

  constructor(private produtosService: ProdutosService, private router: Router) {}

  add() {

    const nome:any = this.form.get('nome')?.value;
    const descricao:any = this.form.get('descricao')?.value;

    const formProduto = new FormData();
    formProduto.append('nome', nome);
    formProduto.append('descricao', descricao);

    this.produtosService.post(formProduto).subscribe((response:any)=>{
      // tratamento se deu erro ou sucesso console.log(response);
      this.router.navigateByUrl('/listar-produtos');
    });
  }
}