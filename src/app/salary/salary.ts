import { Component } from '@angular/core';
import { SalaryTable } from '../components/salary-table/salary-table';

@Component({
  selector: 'app-salary',
  imports: [SalaryTable],
  templateUrl: './salary.html',
  styleUrl: './salary.css'
})
export class Salary {

}
