import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../models/usuario";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UsuarioService{

    private apiUrl = environment.apiUrl + '/usuario'; // URL da sua API

    constructor(private http: HttpClient) {}

    // Função para obter o usuário logado
    getPeriflNavBar(): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.apiUrl}/me`);
    }
}
