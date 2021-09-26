import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {

  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
