import { Component } from '@angular/core';
import { CompanyTable } from '../components/company-table/company-table';

@Component({
  selector: 'app-company',
  imports: [CompanyTable],
  templateUrl: './company.html',
  styleUrl: './company.css'
})
export class Company {

}
