import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePokemonComponent } from './name-pokemon.component';

describe('NamePokemonComponent', () => {
  let component: NamePokemonComponent;
  let fixture: ComponentFixture<NamePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
