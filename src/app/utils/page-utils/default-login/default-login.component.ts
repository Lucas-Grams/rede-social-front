import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-default-login',
    templateUrl: `default-login.component.html`,
    styleUrls: ['default-login.component.scss']
})

export class DefaultLoginComponent implements OnInit{

    @Input() title: string = "";
    @Input() primaryBtnTxt: string = "";
    @Input() secondaryBtnTxt: string = "";
    @Input() isValid: boolean = false;

    @Output("submit") onSubmit= new EventEmitter();
    @Output("secondaryBtnClick") onSecondaryBtnClick = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

    submit() {
        this.onSubmit.emit();
    }

    navigate() {
        this.onSecondaryBtnClick.emit();
    }

}


