import { TestBed } from '@angular/core/testing';

import { RenderGraphicService } from './render-graphic.service';

describe('RenderGraphicService', () => {
  let service: RenderGraphicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderGraphicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
