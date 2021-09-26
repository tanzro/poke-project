import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexTopComponent } from './pokedex-top.component';

describe('PokedexTopComponent', () => {
  let component: PokedexTopComponent;
  let fixture: ComponentFixture<PokedexTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
