import { IProduto } from './../../../model/IProduto.module';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
/*
  listaProdutos:any[] =
  [
    {id: '1', nome: 'Programação Web', inicio: '2021-05-10', preco: 15.75, promocao:true},
    {id: '2', nome: 'JavaScript', inicio: '2021-06-10', preco: 16.75, promocao:true},
    {id: '3', nome: 'PHP', inicio: '2021-07-10', preco: 17.75, promocao:false},
    {id: '4', nome: 'HTML5', inicio: '2021-08-10', preco: 18.75, promocao:true},
    {id: '5', nome: 'Angular', inicio: '2021-09-10', preco: 19.75, promocao:false},
  ];
*/

  listaProdutos:IProduto[] = [];

  constructor(private ProdutosService: ProdutosService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos():void{
    this.ProdutosService.buscarTodos().subscribe(retorno =>{
      this.listaProdutos = retorno;
    })
  }

  deletar(produto: IProduto):void{
    this.ProdutosService.excluir(produto.id).subscribe(() => {
      this.ProdutosService.exibirMensagem(
        'SISTEMA',
        `${produto.nome} foi excluido com sucesso`,
        'toast-error'
      );
      this.carregarProdutos();
    })
  }
}
