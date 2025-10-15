import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tasksdeveloper } from './tasksdeveloper';

describe('Tasksdeveloper', () => {
  let component: Tasksdeveloper;
  let fixture: ComponentFixture<Tasksdeveloper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tasksdeveloper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tasksdeveloper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
