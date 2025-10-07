import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menudeveloper } from './menudeveloper';

describe('Menudeveloper', () => {
  let component: Menudeveloper;
  let fixture: ComponentFixture<Menudeveloper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menudeveloper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menudeveloper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
