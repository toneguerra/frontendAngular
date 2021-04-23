import { map, catchError } from 'rxjs/operators';
import { ICliente } from './../model/ICliente.module';
import { Observable, EMPTY } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private URL: string = environment.URL + '/clientes'; //"http://localhost:3000/clientes";

  constructor(  private http: HttpClient, private toastr: ToastrService) { }

  buscarTodos(): Observable<ICliente[]>{
    return this.http.get<ICliente[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  buscarPorId(id: number): Observable<ICliente>{
    return this.http.get<ICliente>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(e: any): Observable<any>{
    this.exibirMensagem("Erro!!!", "Não foi possivel...", "toast-error");
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
  }

  cadastrar(produto: ICliente): Observable<ICliente>{
    return this.http.post<ICliente>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  atualizar(produto: ICliente): Observable<ICliente>{
    return this.http.put<ICliente>(`${this.URL}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  excluir(id: number): Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }
}
