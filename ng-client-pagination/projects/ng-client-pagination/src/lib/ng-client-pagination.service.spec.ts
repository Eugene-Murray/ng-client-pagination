import { TestBed } from '@angular/core/testing';

import { NgClientPaginationService } from './ng-client-pagination.service';

describe('NgClientPaginationService', () => {
  let service: NgClientPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgClientPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
