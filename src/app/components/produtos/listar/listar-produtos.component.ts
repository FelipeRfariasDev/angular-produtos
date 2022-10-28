import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-listar-produtos.component',
  templateUrl: './listar-produtos.component.html'
})
export class ListarProdutosComponent implements OnInit{

  title='Listar Produtos';
  listarProdutos = [];
  exibirConfirmacaoExcluir:any = false;

  constructor(private produtosService: ProdutosService, private router: Router) {}

  ngOnInit():void
  {
   this.list(); 
  }

  list(){
    this.produtosService.getAll().subscribe((response: any) => {
      this.listarProdutos = response.dados;
    }, error => {
      console.log(error);
    });
  }

  alterar(produto:any){
    this.produtosService.setProdutoSelecionado(produto);
    this.router.navigate(['/alterar-produtos']);
  }

  excluir(){
    const produtoSelecionado = this.produtosService.getProdutoSelecionado();
    this.produtosService.delete(produtoSelecionado.id).subscribe((response: any) => {
      this.list();
    }, error => {
      console.log(error);
    });
  }

  confirmacaoExcluir(produto:any){
    this.produtosService.setProdutoSelecionado(produto);
    this.exibirConfirmacaoExcluir = true;
  }

}