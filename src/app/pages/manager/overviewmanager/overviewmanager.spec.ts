import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overviewmanager } from './overviewmanager';

describe('Overviewmanager', () => {
  let component: Overviewmanager;
  let fixture: ComponentFixture<Overviewmanager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overviewmanager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Overviewmanager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
