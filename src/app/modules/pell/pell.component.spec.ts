import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PellComponent } from './pell.component';

describe('PellComponent', () => {
  let component: PellComponent;
  let fixture: ComponentFixture<PellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
