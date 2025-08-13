import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleEmployee } from './role-employee';

describe('RoleEmployee', () => {
  let component: RoleEmployee;
  let fixture: ComponentFixture<RoleEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleEmployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
