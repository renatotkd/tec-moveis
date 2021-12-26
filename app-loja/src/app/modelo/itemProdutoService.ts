import { Produto } from './produto';
import { Injectable } from '@angular/core';




@Injectable({
    providedIn: 'root',
})
export class ItemProdutoService {
    private itensProdutos: Produto[];
    constructor() {

        this.itensProdutos = [];
    }

    adicionarProdutoCarinho(prod: Produto): boolean {
        if (prod != null && !this.itensProdutos.includes(prod)) {
            this.itensProdutos.push(prod);
            console.log('produto adicionado');

            return true;
        } else {
            console.log('produto nao adicionado');

            return false;
        }
    }

    obteritensProdutos() {
        console.log(this.itensProdutos);
        return this.itensProdutos;
    }
}
