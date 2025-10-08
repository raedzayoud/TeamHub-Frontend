import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leavemanager } from './leavemanager';

describe('Leavemanager', () => {
  let component: Leavemanager;
  let fixture: ComponentFixture<Leavemanager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leavemanager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leavemanager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
