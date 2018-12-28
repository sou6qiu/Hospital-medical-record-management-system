import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PatientService } from '../patients/patient.service';
import { Patient } from '../patients/patient';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  patient$: Observable<Patient>;
  Status = [true, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false];
  Gender = true;
  Abortion = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PatientService
  ) { }

  ngOnInit() {
    this.patient$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
    );
  }
  changeStatus(num) {
    for (let i = 0; i < this.Status.length; i++) {
      this.Status[i] = false;
    }
    this.Status[num] = true;
  }

}
