import { TestBed } from '@angular/core/testing';

import { SznService } from './szn.service';

describe('SznService', () => {
  let service: SznService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SznService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
