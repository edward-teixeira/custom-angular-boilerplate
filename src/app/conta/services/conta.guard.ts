import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageUtils } from 'src/app/utils/localStorage';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Injectable({
  providedIn: 'root'
})
export class ContaGuard implements CanDeactivate<CadastroComponent>, CanActivate {
  private localStorateUtils = new LocalStorageUtils();

  constructor(private router: Router) { }

  canActivate(): boolean {

    if (this.localStorateUtils.obterTokenUsuario()) {
      this.router.navigate(['/home']);
    }
    return true;
  }

  canDeactivate(component: CadastroComponent): Observable<boolean> | Promise<boolean> | boolean {
    switch (true) {
      case !component.isFormValid(component.cadastroForm):
        return window.confirm('Mudanças não salvas no formulario, tem certeza que deseja sair?');
      default:
        return true;
    }
  }
}
