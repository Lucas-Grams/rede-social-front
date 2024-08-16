import {NgModule} from "@angular/core";
import {DefaultLoginComponent} from "./page-utils/default-login/default-login.component";

import {ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./components/input/input.component";
import {NavBarComponent} from "./page-utils/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        DefaultLoginComponent,
        NavBarComponent,
        InputComponent
    ],
    exports: [
        DefaultLoginComponent,
        NavBarComponent,
        InputComponent
    ],
    imports: [
        ReactiveFormsModule
    ]
})
export class UtilsModule { }
