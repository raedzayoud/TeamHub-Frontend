import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytichr } from './analytichr';

describe('Analytichr', () => {
  let component: Analytichr;
  let fixture: ComponentFixture<Analytichr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Analytichr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analytichr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
