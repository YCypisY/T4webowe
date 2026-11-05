import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rejerstrowanie } from './rejerstrowanie';

describe('Rejerstrowanie', () => {
  let component: Rejerstrowanie;
  let fixture: ComponentFixture<Rejerstrowanie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rejerstrowanie],
    }).compileComponents();

    fixture = TestBed.createComponent(Rejerstrowanie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
