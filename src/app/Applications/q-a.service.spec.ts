import { TestBed } from '@angular/core/testing';

import { QAService } from './q-a.service';

describe('QAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QAService = TestBed.get(QAService);
    expect(service).toBeTruthy();
  });
});
