import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientlistComponent } from '../patientlist/patientlist.component';
import { BasicinfoComponent } from '../basicinfo/basicinfo.component';

const heroesRoutes: Routes = [
  { path: 'index',  component: PatientlistComponent, data: { animation: 'patients' } },
  { path: 'patient/:id', component: BasicinfoComponent, data: { animation: 'hero' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PatientRoutingModule { }
