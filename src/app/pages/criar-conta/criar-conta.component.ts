import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
    selector: 'app-criar-conta',
    templateUrl: './criar-conta.component.html',
    styleUrls: ['./criar-conta.component.scss']
})
export class CriarContaComponent implements OnInit {
    form: FormGroup = new FormGroup({});

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            emailConfirm: ['', Validators.required],
            password: ['', Validators.required],
            passwordConfirm: ['', Validators.required]
        });
    }

    submit() {
        if (this.form.valid) {
            // Aqui você pode adicionar a lógica para criar a conta
            Swal.fire("Sucesso!", "Conta criada com sucesso!", "success");
        } else {
            Swal.fire("Ops!", "É necessário preencher todos os campos!", "warning");
        }
    }

    navigate() {
        this.router.navigate(['/login']);
    }
}
