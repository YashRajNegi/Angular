import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngiff } from './ngiff';

describe('Ngiff', () => {
  let component: Ngiff;
  let fixture: ComponentFixture<Ngiff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngiff],
    }).compileComponents();

    fixture = TestBed.createComponent(Ngiff);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
