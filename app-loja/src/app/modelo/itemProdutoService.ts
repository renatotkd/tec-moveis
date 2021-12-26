import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';




@Injectable({
    providedIn: 'root',
})
export class ItemProdutoService {
    private itensProdutos: Produto[];
    constructor(private toastr: ToastrService) {

        this.itensProdutos = [];
    }

    adicionarProdutoCarrinho(prod: Produto): boolean {
        if (prod != null && !this.itensProdutos.includes(prod)) {
            this.itensProdutos.push(prod);
            this.toastr.success('produto adicionado');
            return true;
        } else {
            this.toastr.warning('produto ja foi adicionado ao carrinho' );
            return false;
        }
    }

    obteritensProdutos() {
        console.log(this.itensProdutos);
        return this.itensProdutos;
    }
}
