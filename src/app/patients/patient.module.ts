import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientlistComponent } from '../patientlist/patientlist.component';
import { BasicinfoComponent } from '../basicinfo/basicinfo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PatientModule
  ],
  declarations: [
    PatientlistComponent,
    BasicinfoComponent
  ]
})
export class PatientModule {}
