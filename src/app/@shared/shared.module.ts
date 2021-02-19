import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';

import { LoaderComponent } from './loader/loader.component';
import { FulfillingBouncingCircleSpinnerModule } from 'angular-epic-spinners';

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FulfillingBouncingCircleSpinnerModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    })
   ],
  exports: [
    LoaderComponent,
  ],
  providers: [],
})
export class SharedModule {}
