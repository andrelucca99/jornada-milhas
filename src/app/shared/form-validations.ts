import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations {
  static equalTo(otherField: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fieldValue = control.value;
      const outherFieldValue = control.root.get(otherField)?.value;

      if (fieldValue !== outherFieldValue) {
        return { equalTo: true };
      }

      return null;
    };
  }
}
