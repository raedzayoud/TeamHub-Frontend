import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overfiewdeveloper } from './overfiewdeveloper';

describe('Overfiewdeveloper', () => {
  let component: Overfiewdeveloper;
  let fixture: ComponentFixture<Overfiewdeveloper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overfiewdeveloper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Overfiewdeveloper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
