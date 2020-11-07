import { TestBed } from '@angular/core/testing';

import { HttpRequestProcessingService } from './http-request-processing.service';

describe('HttpRequestProcessingService', () => {
  let service: HttpRequestProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
