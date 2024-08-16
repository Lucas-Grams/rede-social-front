import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {UtilsModule} from "../../utils/utils.module";
import {RouterModule} from "@angular/router";
import {HomeRoutingModule} from "./home-routing.module";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        UtilsModule,
        HomeRoutingModule
    ],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
