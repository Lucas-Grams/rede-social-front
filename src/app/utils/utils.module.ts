import {NgModule} from "@angular/core";
import {DefaultLoginComponent} from "./page-utils/default-login/default-login.component";
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
