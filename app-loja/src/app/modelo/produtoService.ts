import { Produto } from './produto';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[];
  constructor( ) {

    this.produtos = [
        {
            nome: 'serenata',
            descricao: '',
            quantidade: 20,
            valor: 2,
        },
        {
            nome: 'baton',
            descricao: '',
            quantidade: 50,
            valor: 2,
        },
        {
            nome: 'ouroreal',
            descricao: '',
            quantidade: 60,
            valor: 3,
        },
        {
            nome: 'crocante',
            descricao: '',
            quantidade: 60,
            valor: 1,
        },
        {
            nome: 'creme',
            descricao: '',
            quantidade: 30,
            valor: 2,
        },
    ];
  }

  adicionarProduto(prod: Produto): boolean {
    if (prod != null && !this.produtos.includes(prod)) {
      this.produtos.push(prod);

      return true;
    }

    return false;
  }

  obterProdutos() {
      console.log(this.produtos);
    return this.produtos;
  }
}
