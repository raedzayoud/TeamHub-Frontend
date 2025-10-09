import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Payrollhr } from './payrollhr';

describe('Payrollhr', () => {
  let component: Payrollhr;
  let fixture: ComponentFixture<Payrollhr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Payrollhr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Payrollhr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
