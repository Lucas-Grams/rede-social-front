import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {DefaultLoginComponent} from "./page-utils/default-login/default-login.component";
import {LoginComponent} from "../pages/login/login.component";
import {CriarContaComponent} from "../pages/criar-conta/criar-conta.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./components/input/input.component";

@NgModule({
    declarations: [
        DefaultLoginComponent,
        InputComponent
    ],
    exports: [
        DefaultLoginComponent,
        InputComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ]
})
export class UtilsModule { }
