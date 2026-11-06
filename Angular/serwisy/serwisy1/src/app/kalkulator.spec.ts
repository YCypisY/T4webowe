import { TestBed } from '@angular/core/testing';
import { Kalkulator } from './kalkulator';

describe('Kalkulator', () => {
  let service: Kalkulator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kalkulator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
