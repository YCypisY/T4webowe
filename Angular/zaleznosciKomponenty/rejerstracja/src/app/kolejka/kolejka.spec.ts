import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Kolejka } from './kolejka';

describe('Kolejka', () => {
  let component: Kolejka;
  let fixture: ComponentFixture<Kolejka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kolejka],
    }).compileComponents();

    fixture = TestBed.createComponent(Kolejka);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
