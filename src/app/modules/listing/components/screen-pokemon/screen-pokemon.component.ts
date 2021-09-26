import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'screen-pokemon',
  templateUrl: './screen-pokemon.component.html',
  styleUrls: ['./screen-pokemon.component.scss']
})
export class ScreenPokemonComponent implements OnInit {

  @Input() imgUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
