import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../@shared/shared.module';

import { CustomFormsModule } from 'ngx-custom-validators';

import { ContaRoutingModule } from './conta.route';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppContaComponent } from './app.conta.component';
import { ContaService } from './services/conta.service';
import { ContaGuard } from './services/conta.guard';


@NgModule({
  declarations: [
    AppContaComponent,
    CadastroComponent,
    LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CustomFormsModule,
  ],
  providers: [
    ContaService,
    ContaGuard
  ]
})
export class ContaModule { }
