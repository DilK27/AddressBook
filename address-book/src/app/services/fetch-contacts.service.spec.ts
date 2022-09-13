import { TestBed } from '@angular/core/testing';

import { FetchContactsService } from './fetch-contacts.service';

describe('FetchContactsService', () => {
  let service: FetchContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchContactsService);
  });
});
