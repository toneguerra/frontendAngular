import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {


@Input() id:number;
@Input() nome:string;
@Input() inicio:string;
@Input() promocao:boolean;
@Input() preco:number;

  constructor() { }

  ngOnInit(): void {
  }

}
