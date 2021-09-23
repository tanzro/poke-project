import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MiddleDetailComponent } from './components/middle-detail/middle-detail.component';
import { BottomDetailComponent } from './components/bottom-detail/bottom-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    MiddleDetailComponent,
    BottomDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent,
    MiddleDetailComponent,
    BottomDetailComponent
  ]
})
export class HomeModule { }
