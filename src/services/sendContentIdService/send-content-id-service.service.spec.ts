import { TestBed } from '@angular/core/testing';

import { SendContentIdServiceService } from './send-content-id-service.service';

describe('SendContentIdServiceService', () => {
  let service: SendContentIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendContentIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
