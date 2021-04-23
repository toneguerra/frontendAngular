import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.module';
import { Component, OnInit } from '@angular/core';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  /*
  nome: string;
  inicio: string;
  preco: number;
  */

  produto: IProduto = {
    nome: null,
    inicio: null,
    preco: null
  };

  constructor(private ProdutosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarProduto():void{

      this.ProdutosService.cadastrar(this.produto).subscribe(retorno => {
        this.produto = retorno;
        this.ProdutosService.exibirMensagem(
          "SISTEMA",
          `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
          'toast-success'
        );
        this.router.navigate(['/produtos']);
      });
  }
}
