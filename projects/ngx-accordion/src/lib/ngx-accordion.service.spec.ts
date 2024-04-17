import { TestBed } from '@angular/core/testing';

import { NgxAccordionService } from './ngx-accordion.service';

describe('NgxAccordionService', () => {
  let service: NgxAccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
