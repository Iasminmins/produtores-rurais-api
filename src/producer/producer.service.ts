import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producer } from './producer.entity';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';

@Injectable()
export class ProducerService {
  constructor(
    @InjectRepository(Producer)
    private producerRepository: Repository<Producer>,
  ) {}

  async create(createProducerDto: CreateProducerDto): Promise<Producer> {
    const producer = this.producerRepository.create(createProducerDto);
    return await this.producerRepository.save(producer);
  }

  async findAll(): Promise<Producer[]> {
    return await this.producerRepository.find();
  }

  async findOne(id: number): Promise<Producer> {
    const producer = await this.producerRepository.findOne({ where: { id } });
    if (!producer) {
      throw new NotFoundException(`Producer with ID ${id} not found`);
    }
    return producer;
  }

  async update(id: number, updateProducerDto: UpdateProducerDto): Promise<Producer> {
    await this.producerRepository.update(id, updateProducerDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const producer = await this.findOne(id);
    await this.producerRepository.remove(producer);
  }

  async getTotalFazendas(): Promise<number> {
    return await this.producerRepository.count();
  }

  async getTotalHectares(): Promise<number> {
    const total = await this.producerRepository
      .createQueryBuilder('producer')
      .select('SUM(producer.hectares)', 'sum')
      .getRawOne();
    return Number(total.sum || 0);
  }
  async getCulturasPorEstado(): Promise<any> {
    return await this.producerRepository
      .createQueryBuilder('producer')
      .select('producer.estado, COUNT(producer.id) as total')
      .groupBy('producer.estado')
      .getRawMany();
  }

}
