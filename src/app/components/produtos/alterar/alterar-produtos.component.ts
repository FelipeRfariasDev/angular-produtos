import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-alterar-produtos.component',
  templateUrl: './alterar-produtos.component.html'
})
export class AlterarProdutosComponent implements OnInit {

  title='Alterar Produto';

  produtoSelecionado:any;

  form:any = new FormGroup({
    id: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required)
  });

  constructor(private produtosService: ProdutosService, private router: Router) {
    this.produtoSelecionado = produtosService.getProdutoSelecionado();
  }
  
  ngOnInit(): void {
    this.setAlimentarCamposFormulario();
  }

  setAlimentarCamposFormulario(){
    this.form = new FormGroup({
      id:new FormControl(this.produtoSelecionado?.id,Validators.required),
      nome:new FormControl(this.produtoSelecionado?.nome,Validators.required),
      descricao:new FormControl(this.produtoSelecionado?.descricao,Validators.required)
    });
  }

  put() {

    const id:any = this.form.get('id')?.value;
    const nome:any = this.form.get('nome')?.value;
    const descricao:any = this.form.get('descricao')?.value;

    const formProduto = new FormData();
    formProduto.append('nome', nome);
    formProduto.append('descricao', descricao);

    this.produtosService.put(formProduto,id).subscribe((response:any)=>{
      // tratamento se deu erro ou sucesso console.log(response);
      this.router.navigateByUrl('/listar-produtos');
    });
  }
}