import { TestBed } from '@angular/core/testing';

import { ConsultsisgruService } from './consultsisgru.service';

describe('ConsultsisgruService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultsisgruService = TestBed.get(ConsultsisgruService);
    expect(service).toBeTruthy();
  });
});
