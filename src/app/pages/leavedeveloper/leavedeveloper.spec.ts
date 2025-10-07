import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leavedeveloper } from './leavedeveloper';

describe('Leavedeveloper', () => {
  let component: Leavedeveloper;
  let fixture: ComponentFixture<Leavedeveloper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leavedeveloper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leavedeveloper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
