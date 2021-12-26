import { Produto } from './../modelo/produto';
import { ItemProdutoService } from './../modelo/itemProdutoService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  listaCarrinho: Produto[];

  constructor(private carrinho: ItemProdutoService) { }

  ngOnInit() {
    this.listaCarrinho = this.carrinho.obteritensProdutos();
  }

}

