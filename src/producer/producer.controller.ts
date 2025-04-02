import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';

@Controller('producers')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post()
  async create(@Body() createProducerDto: CreateProducerDto) {
    return this.producerService.create(createProducerDto);
  }

  @Get()
  async findAll() {
    return this.producerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.producerService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProducerDto: UpdateProducerDto) {
    return this.producerService.update(+id, updateProducerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.producerService.remove(+id);
  }


  @Get('indicators/total-fazendas')
  async getTotalFazendas() {
    return { totalFazendas: await this.producerService.getTotalFazendas() };
  }

  // Soma total de hectares
  @Get('indicators/total-hectares')
  async getTotalHectares() {
    return { totalHectares: await this.producerService.getTotalHectares() };
  }

  // Total de culturas plantadas por estado
  @Get('indicators/culturas-por-estado')
  async getCulturasPorEstado() {
    return await this.producerService.getCulturasPorEstado();
  }
}
