import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeehr } from './employeehr';

describe('Employeehr', () => {
  let component: Employeehr;
  let fixture: ComponentFixture<Employeehr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeehr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeehr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
