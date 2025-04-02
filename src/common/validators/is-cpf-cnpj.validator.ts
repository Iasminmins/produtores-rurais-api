import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsCpfCnpjConstraint implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {

    const cleaned = text.replace(/\D/g, '');

    return cleaned.length === 11 || cleaned.length === 14;
  }

  defaultMessage(args: ValidationArguments) {
    return 'CPF ou CNPJ inválido. Deve conter 11 dígitos (CPF) ou 14 dígitos (CNPJ).';
  }
}

export function IsCpfCnpj(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsCpfCnpjConstraint,
    });
  };
}
