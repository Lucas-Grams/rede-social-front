import {Component, OnInit} from "@angular/core";
import {Usuario} from "../../../core/models/usuario";
import {AuthService} from "../../../core/services/auth/auth.service";
import {UsuarioService} from "../../../core/services/usuario.service";

@Component({
    selector: 'app-nav-bar',
    templateUrl: 'nav-bar.component.html',
    styleUrls: ['nav-bar.component.scss']
})

export class NavBarComponent implements OnInit{

    usuario?: Usuario;

    constructor(private authService: AuthService, usuarioService: UsuarioService) {
        usuarioService.getPeriflNavBar().subscribe(usuario => this.usuario = usuario);
    }

    ngOnInit() {
    }

    foto(){
        return this.usuario?.foto ? this.usuario.foto : this.usuario?.nome?.charAt(0).toUpperCase();
    }

    logout() {
        this.authService.logout();
    }
}
