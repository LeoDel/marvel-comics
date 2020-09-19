import { TestBed } from '@angular/core/testing';

import { MarvelComicsService } from './marvel-comics.service';

describe('MarvelComicsService', () => {
  let service: MarvelComicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelComicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
