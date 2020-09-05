import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser().pipe(map(user => user !== null),
      tap(hasUser => {
        // tap es un elemento que se agrega a la ejecución del observable
        // pero no altera el elemento que se recibe.
        if (!hasUser) {
          this.router.navigate(['/auth/login']);
        }
      }));

    // La siguiente es otra forma de hacer la redirección de forma correcta.
    // map(user => {
    //   if (!user) {
    //     return this.router.parseUrl('/');

    //     // // Lo mismo que lo anterior pero para versiones de angular anteriores
    //     // // a la 7
    //     // this.router.navigateByUrl('/home');
    //     // return false;
    //   }
    //   return true;
    // }));
  }
}
