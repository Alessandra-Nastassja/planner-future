import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';

describe('HiddenCurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
