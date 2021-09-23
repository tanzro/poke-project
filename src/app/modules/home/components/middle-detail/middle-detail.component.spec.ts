import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleDetailComponent } from './middle-detail.component';

describe('MiddleDetailComponent', () => {
  let component: MiddleDetailComponent;
  let fixture: ComponentFixture<MiddleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
