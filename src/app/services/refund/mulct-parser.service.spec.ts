import { TestBed } from '@angular/core/testing';

import { MulctParserService } from './mulct-parser.service';

describe('MulctParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MulctParserService = TestBed.get(MulctParserService);
    expect(service).toBeTruthy();
  });
});
