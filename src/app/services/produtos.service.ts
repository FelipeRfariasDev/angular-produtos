import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProdutosService {

    produtoSelecionado:any | undefined;

    constructor(private http: HttpClient) {}

    getAll(){
        return this.http.get('https://whatslista.site/projeto/api/key1/token1/cardapio/consultaGeral');
    }

    post(formProduto:any){
        return this.http.post('https://whatslista.site/projeto/api/key1/token1/cardapio/adicionarItem',formProduto);
    }

    put(formProduto:any, id:any){
        return this.http.post('https://whatslista.site/projeto/api/key1/token1/cardapio/alterarItem/'+id,formProduto);
    }

    delete(id:any){
        return this.http.delete('https://whatslista.site/projeto/api/key1/token1/cardapio/excluirItem/'+id);
    }

    setProdutoSelecionado(produto:any){
        this.produtoSelecionado = produto;
    }

    getProdutoSelecionado(){
        return this.produtoSelecionado;
    }
}