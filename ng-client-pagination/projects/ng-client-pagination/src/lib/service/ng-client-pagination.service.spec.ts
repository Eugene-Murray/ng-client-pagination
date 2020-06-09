import { TestBed } from '@angular/core/testing';

import { PaginationService } from './ng-client-pagination.service';

describe('NgClientPaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
