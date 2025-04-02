import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsValidAreaConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    if (!value) return false; // Garante que os valores existem
    const { agricultavel, vegetacao, total } = value;
    return agricultavel + vegetacao <= total;
  }
}

export function IsValidArea(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidAreaConstraint,
    });
  };
}
