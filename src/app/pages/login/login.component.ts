import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';

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
        private activatedRoute: ActivatedRoute
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
        console.log(this.form.value)
        if (this.form.valid) {
            this.router.navigate(['']);
        } else {
            Swal.fire("Ops!", "É necssário preencher todos os campos!", "warning");
        }
    }

    navigate() {
        this.router.navigate(['/criar-conta']);
    }
}
