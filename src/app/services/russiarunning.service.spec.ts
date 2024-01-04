import { TestBed } from '@angular/core/testing';

import { RussiarunningService } from './russiarunning.service';

describe('RussiarunningService', () => {
  let service: RussiarunningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RussiarunningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
