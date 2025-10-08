import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teamsmanger } from './teamsmanger';

describe('Teamsmanger', () => {
  let component: Teamsmanger;
  let fixture: ComponentFixture<Teamsmanger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teamsmanger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teamsmanger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
