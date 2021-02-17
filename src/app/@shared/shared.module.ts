import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { FulfillingBouncingCircleSpinnerModule } from 'angular-epic-spinners';

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FulfillingBouncingCircleSpinnerModule
   ],
  exports: [
    LoaderComponent,
  ],
  providers: [],
})
export class SharedModule {}
