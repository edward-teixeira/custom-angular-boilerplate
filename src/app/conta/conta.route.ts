import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContaComponent } from './app.conta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaGuard } from './services/conta.guard';

const routes: Routes = [
  { path: '', component: AppContaComponent, children: [
    { path: 'cadastro', canDeactivate: [ContaGuard], component: CadastroComponent },
    { path: 'login', canActivate: [ContaGuard], component: LoginComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule {}

