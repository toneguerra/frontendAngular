import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {
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

  constructor(
    private ProdutosService: ProdutosService,
    private router: Router,
    private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id= Number(this.activateRouter.snapshot.paramMap.get('id'));
    this.ProdutosService.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno;
    });
  }

  salvarProduto():void{

      this.ProdutosService.atualizar(this.produto).subscribe(retorno => {
        this.produto = retorno;
        this.ProdutosService.exibirMensagem(
          "SISTEMA",
          `${this.produto.nome} foi atualizado com sucesso.)`,
          'toast-success'
        );
        this.router.navigate(['/produtos']);
      });
  }
}
