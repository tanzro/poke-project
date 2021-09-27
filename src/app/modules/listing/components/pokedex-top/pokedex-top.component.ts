import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex-top',
  templateUrl: './pokedex-top.component.html',
  styleUrls: ['./pokedex-top.component.scss']
})
export class PokedexTopComponent implements OnInit {

  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
