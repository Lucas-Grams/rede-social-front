import {Component, forwardRef, Input} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

type InputTypes = "text" | "password" | "email" | "number" | "tel" | "url" | "search"
    | "date" | "time" | "datetime-local" | "month" | "week";

@Component({
    selector: 'app-input',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})

export class InputComponent implements ControlValueAccessor{

    @Input() type: InputTypes = "text";
    @Input() placeholder: string = "";
    @Input() inputName: string = "";
    @Input() label: string = "";

    value: string = "";

    onChange: any = () => {};
    onTouch: any = () => {};

    onInput(event:Event) {
        const value = (event.target as HTMLInputElement).value;
        this.onChange(value);
    }

    writeValue(obj: any) {
        this.value = obj;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

}
