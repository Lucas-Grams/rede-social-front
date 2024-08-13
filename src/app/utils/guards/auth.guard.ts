import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "../../core/services/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate(): boolean {
        if (this.auth.getToken()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
