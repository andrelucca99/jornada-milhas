import { TestBed } from '@angular/core/testing';

import { EstadosBrService } from './estados-br.service';

describe('EstadosBrService', () => {
  let service: EstadosBrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadosBrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
