import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Cultura {
  SOJA = 'Soja',
  MILHO = 'Milho',
  ALGODAO = 'Algodão',
  CAFE = 'Café',
  CANA_ACUCAR = 'Cana de Açucar',
}

@Entity()
export class Producer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  cpfCnpj: string;

  @Column()
  nomeProdutor: string;

  @Column()
  nomeFazenda: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column('float')
  areaTotal: number;

  @Column('float')
  areaAgricultavel: number;

  @Column('float')
  areaVegetacao: number;

  @Column("simple-array")
  culturasPlantadas: Cultura[];
}
