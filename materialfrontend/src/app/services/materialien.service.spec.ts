import { TestBed } from '@angular/core/testing';

import { MaterialienService } from './materialien.service';

describe('MaterialienService', () => {
  let service: MaterialienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
