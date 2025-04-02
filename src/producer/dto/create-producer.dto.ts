import { IsString, IsNumber, IsArray, Min, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateProducerDto {
  @IsString()
  @IsNotEmpty()
  nomeProdutor: string;

  @IsString()
  @IsNotEmpty()
  nomeFazenda: string;

  @IsString()
  @MaxLength(14)
  @IsNotEmpty()
  cpfCnpj: string; // Deve ser único

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsNumber()
  @Min(1)
  areaTotal: number;

  @IsNumber()
  @Min(0)
  areaAgricultavel: number;

  @IsNumber()
  @Min(0)
  areaVegetacao: number;

  @IsArray()
  culturas: string[];
}
