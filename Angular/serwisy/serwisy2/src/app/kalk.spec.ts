import { TestBed } from '@angular/core/testing';
import { Kalk } from './kalk';

describe('Kalk', () => {
  let service: Kalk;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kalk);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
