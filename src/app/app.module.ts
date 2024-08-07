import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./pages/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CriarContaComponent} from "./pages/criar-conta/criar-conta.component";
import {DefaultLoginComponent} from "./utils/page-utils/default-login/default-login.component";
import {UtilsModule} from "./utils/utils.module";

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      CriarContaComponent
  ],
    imports: [
        UtilsModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
