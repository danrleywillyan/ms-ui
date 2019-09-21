import { TestBed } from '@angular/core/testing';

import { ElucidationService } from './elucidation.service';

describe('ElucidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElucidationService = TestBed.get(ElucidationService);
    expect(service).toBeTruthy();
  });
});
