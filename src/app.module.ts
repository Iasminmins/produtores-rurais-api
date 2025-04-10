import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerModule } from './producer/producer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // ou 'postgres', dependendo do banco
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '81204413',
      database: 'api_rural',
      autoLoadEntities: true, // Carrega todas as entidades automaticamente
      synchronize: true, // Para dev, sincroniza mudanças nas entidades com o BD
    }),
    ProducerModule, // ✅ Importa o módulo corretamente
  ],
})
export class AppModule {}