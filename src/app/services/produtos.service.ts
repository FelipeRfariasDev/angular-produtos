import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProdutosService {

    constructor(private http: HttpClient) {}

    getAll(){
        return this.http.get('https://whatslista.site/projeto/api/key1/token1/cardapio/consultaGeral');
    }

    post(formProduto:any){
        return this.http.post('https://whatslista.site/projeto/api/key1/token1/cardapio/adicionarItem',formProduto);
    }
}