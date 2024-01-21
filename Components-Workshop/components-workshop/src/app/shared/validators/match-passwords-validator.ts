import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(control1: string, control2: string) : ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const ctrl1 = group.get(control1);
        const ctrl2 = group.get(control2);
        return ctrl1?.value === ctrl2?.value ? null : { matchPasswordsValidator: true};
    }
}