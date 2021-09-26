import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPokedexComponent } from './button-pokedex.component';

describe('ButtonPokedexComponent', () => {
  let component: ButtonPokedexComponent;
  let fixture: ComponentFixture<ButtonPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPokedexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
