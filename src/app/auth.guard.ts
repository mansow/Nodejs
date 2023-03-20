// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { AuthService } from './services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private apkey: AuthService, private route: Router) { }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//     if (this.apkey.isAuthenticated()) 
//     {
//       this.route.navigate(['/display'])
//       return true
//     }
//     this.route.navigate(['/login'])
//     return false

//   }

// }
