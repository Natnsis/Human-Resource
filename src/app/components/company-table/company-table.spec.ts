import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTable } from './company-table';

describe('CompanyTable', () => {
  let component: CompanyTable;
  let fixture: ComponentFixture<CompanyTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
