import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import {LoginResponse} from "../../dtos/login-response";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8080/auth'; // URL da sua API

    constructor(private http: HttpClient, private router: Router) {}

    login(email: string, senha: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, senha });
    }

    // Função para armazenar o token
    setToken(token: string): void {
        localStorage.setItem('auth_token', token);
    }

    // Função para obter o token
    getToken(): string | null {
        return localStorage.getItem('auth_token');
    }

    // Função para remover o token (logout)
    logout(): void {
        localStorage.removeItem('auth_token');
        this.router.navigate(['/login']);

    }
}
