import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Array } from './array';

describe('Array', () => {
  let component: Array;
  let fixture: ComponentFixture<Array>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Array],
    }).compileComponents();

    fixture = TestBed.createComponent(Array);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
