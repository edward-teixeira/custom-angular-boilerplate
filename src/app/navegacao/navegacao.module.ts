import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbModule,
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
    NotFoundComponent
  ],
  providers: [],
})
export class NavegacaoModule { }
