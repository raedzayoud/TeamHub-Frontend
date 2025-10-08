import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overviewhr } from './overviewhr';

describe('Overviewhr', () => {
  let component: Overviewhr;
  let fixture: ComponentFixture<Overviewhr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overviewhr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Overviewhr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
