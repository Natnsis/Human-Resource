import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryTable } from './salary-table';

describe('SalaryTable', () => {
  let component: SalaryTable;
  let fixture: ComponentFixture<SalaryTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
