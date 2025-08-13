import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candidate } from './candidate';

describe('Candidate', () => {
  let component: Candidate;
  let fixture: ComponentFixture<Candidate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Candidate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Candidate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
