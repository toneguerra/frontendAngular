import { Router, ActivatedRoute } from '@angular/router';
import { ICliente } from './../../../model/ICliente.module';
import { ClientesService } from './../../../services/clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-cliente',
  templateUrl: './atualizar-cliente.component.html',
  styleUrls: ['./atualizar-cliente.component.css']
})
export class AtualizarClienteComponent implements OnInit {

  cliente: ICliente = {
    nome: null,
    email: null
  };

  constructor(
    private ClientesService: ClientesService,
    private router: Router,
    private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id= Number(this.activateRouter.snapshot.paramMap.get('id'));
    this.ClientesService.buscarPorId(id).subscribe(retorno => {
      this.cliente = retorno;
    });
  }

  salvarCliente():void{

      this.ClientesService.atualizar(this.cliente).subscribe(retorno => {
        this.cliente = retorno;
        this.ClientesService.exibirMensagem(
          "SISTEMA",
          `${this.cliente.nome} foi atualizado com sucesso.)`,
          'toast-success'
        );
        this.router.navigate(['/clientes']);
      });
  }
}
