import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menumanager } from './menumanager';

describe('Menumanager', () => {
  let component: Menumanager;
  let fixture: ComponentFixture<Menumanager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menumanager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menumanager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
