import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { EnterResultComponent } from './enter-result/enter-result.component';
import { ResultComponent } from './result/result.component';
import { ThromboelastogramComponent } from './thromboelastogram/thromboelastogram.component';
import { PeripheralBloodCytokinesComponent } from './peripheral-blood-cytokines/peripheral-blood-cytokines.component';
import { PeripheralBloodLymphocyteComponent } from './peripheral-blood-lymphocyte/peripheral-blood-lymphocyte.component';
import { AnticoagulantProteinComponent } from './anticoagulant-protein/anticoagulant-protein.component';
import { SexHormoneComponent } from './sex-hormone/sex-hormone.component';
import { AgongComponent } from './agong/agong.component';
import { BadReactionComponent } from './bad-reaction/bad-reaction.component';
import { List1Component } from './list1/list1.component';
import { MaleComponent } from './male/male.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PregancyComponent } from './pregancy/pregancy.component';
import { UltrasoundBComponent } from './ultrasound-b/ultrasound-b.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
registerLocaleData(zh);

const appRoutes: Routes = [
  { path: 'index', component: PatientlistComponent },
  { path: 'patient/:id', component: BasicinfoComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    PatientlistComponent,
    BadReactionComponent,
    EnterResultComponent,
    ResultComponent,
    ThromboelastogramComponent,
    PeripheralBloodCytokinesComponent,
    PeripheralBloodLymphocyteComponent,
    AnticoagulantProteinComponent,
    SexHormoneComponent,
    AgongComponent,
    List1Component,
    MaleComponent,
    MedicineComponent,
    PregancyComponent,
    UltrasoundBComponent,
    PageNotFoundComponent,
    BasicinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  bootstrap: [ AppComponent ],
  /** 配置 ng-zorro-antd 国际化 **/
  providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
})
export class AppModule { }
