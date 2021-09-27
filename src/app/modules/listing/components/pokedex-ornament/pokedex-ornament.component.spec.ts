import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexOrnamentComponent } from './pokedex-ornament.component';

describe('PokedexOrnamentComponent', () => {
  let component: PokedexOrnamentComponent;
  let fixture: ComponentFixture<PokedexOrnamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexOrnamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexOrnamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
