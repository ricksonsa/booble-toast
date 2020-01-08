import { TestBed } from '@angular/core/testing';

import { BoobleToastService } from './booble-toast.service';

describe('BoobleToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoobleToastService = TestBed.get(BoobleToastService);
    expect(service).toBeTruthy();
  });
});
