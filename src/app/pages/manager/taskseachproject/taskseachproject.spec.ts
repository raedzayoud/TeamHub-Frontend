import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskseachproject } from './taskseachproject';

describe('Taskseachproject', () => {
  let component: Taskseachproject;
  let fixture: ComponentFixture<Taskseachproject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taskseachproject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taskseachproject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
