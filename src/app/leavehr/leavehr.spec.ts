import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leavehr } from './leavehr';

describe('Leavehr', () => {
  let component: Leavehr;
  let fixture: ComponentFixture<Leavehr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leavehr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leavehr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
