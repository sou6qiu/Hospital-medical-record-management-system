import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.scss']
})
export class PatientlistComponent implements OnInit {
  patients: Patients[] = [];
  allChecked = false;
  indeterminate = false;

  refreshStatus(): void {
    const allChecked = this.patients.every(value => value.checked === true);
    const allUnChecked = this.patients.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.patients.forEach(data => data.checked = value);
    this.refreshStatus();
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(' https://easy-mock.com/mock/5c2251ea4e21841210a701e3/patientlist/patientinfo').subscribe(
      (data: Patients[]) => {
        this.patients = data;
      });
  }

}

interface Patients {
  id?: number;
  name?: string;
  gender?: string;
  age?: number;
  date?: string;
  tel?: string;
  checked?: boolean;
}
