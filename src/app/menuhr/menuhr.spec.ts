import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menuhr } from './menuhr';

describe('Menuhr', () => {
  let component: Menuhr;
  let fixture: ComponentFixture<Menuhr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menuhr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menuhr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
