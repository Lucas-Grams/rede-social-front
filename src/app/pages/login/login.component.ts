import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';
import {AuthService} from "../../core/services/auth/auth.service";
import {error} from "@angular/compiler/src/util";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
})

export class LoginComponent implements OnInit {

    form: FormGroup = new FormGroup({});

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        this.buildForm();
    }

    private buildForm() {
        this.form = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required, Validators.email]),
            password: this.formBuilder.control('', Validators.required)
        });
    }

    login() {
        if (this.form.valid) {
            this.authService.login(this.form.get('email')?.value, this.form.get('password')?.value).subscribe({
                next: (response: any) => { // Defina o tipo adequado se você tiver uma interface para a resposta
                    const token = response.token;
                    this.authService.setToken(token);
                    this.router.navigate(['/home']);
                },
                error: (error: any) => { // Defina o tipo adequado se você tiver uma interface para o erro
                    console.error(error);
                }
            });
        } else {
            Swal.fire("Ops!", "É necssário preencher todos os campos!", "warning");
        }
    }

    navigate() {
        this.router.navigate(['/criar-conta']);
    }
}
