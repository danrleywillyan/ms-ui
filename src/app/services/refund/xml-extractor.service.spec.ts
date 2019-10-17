import { TestBed } from '@angular/core/testing';

import { XmlExtractorService } from './xml-extractor.service';

describe('XmlExtractorrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XmlExtractorService = TestBed.get(XmlExtractorService);
    expect(service).toBeTruthy();
  });
});
