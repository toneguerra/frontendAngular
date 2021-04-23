import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos:any[] =
  [
    {id: '1', nome: 'Programação Web', inicio: '2021-05-10', preco: 15.75, promocao:false},
    {id: '2', nome: 'JavaScript', inicio: '2021-06-10', preco: 16.75, promocao:true},
    {id: '3', nome: 'PHP', inicio: '2021-07-10', preco: 17.75, promocao:false},
    {id: '4', nome: 'HTML5', inicio: '2021-08-10', preco: 18.75, promocao:true},
    {id: '5', nome: 'Angular', inicio: '2021-09-10', preco: 19.75, promocao:false},
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

}
