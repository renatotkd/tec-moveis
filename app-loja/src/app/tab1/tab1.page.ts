import { ItemProdutoService } from './../modelo/itemProdutoService';

import {  ProdutoService } from './../modelo/produtoService';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../modelo/produto';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  listaProdutos: Produto[];
  constructor(private ps: ProdutoService,private carrinho: ItemProdutoService, ){
  }
  ngOnInit(){
    this.listaProdutos = this.ps.obterProdutos();
}

}
