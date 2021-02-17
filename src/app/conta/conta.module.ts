import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../@shared/shared.module';
// custom
import { ContaRoutingModule } from './conta.route';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppContaComponent } from './app.conta.component';
import { ContaService } from './services/conta.service';


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
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
