import { TestBed } from '@angular/core/testing';

import { ManagerService } from '../manager/manager';

describe('Manager', () => {
  let service: ManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
