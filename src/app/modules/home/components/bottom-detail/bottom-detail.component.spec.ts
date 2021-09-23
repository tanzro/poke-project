import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomDetailComponent } from './bottom-detail.component';

describe('BottomDetailComponent', () => {
  let component: BottomDetailComponent;
  let fixture: ComponentFixture<BottomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
