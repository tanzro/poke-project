import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-pokedex',
  templateUrl: './button-pokedex.component.html',
  styleUrls: ['./button-pokedex.component.scss']
})
export class ButtonPokedexComponent implements OnInit {

  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
