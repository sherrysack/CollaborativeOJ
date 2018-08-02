import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, @Inject('auth') private auth) { }

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      // redirect to home page if not logged in
      console.log("you cant visit");
      this.router.navigate(['/problems']);
      return false;
    }
  }
}
