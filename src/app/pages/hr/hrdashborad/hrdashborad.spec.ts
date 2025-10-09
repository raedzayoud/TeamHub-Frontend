import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hrdashborad } from './hrdashborad';

describe('Hrdashborad', () => {
  let component: Hrdashborad;
  let fixture: ComponentFixture<Hrdashborad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hrdashborad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hrdashborad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
