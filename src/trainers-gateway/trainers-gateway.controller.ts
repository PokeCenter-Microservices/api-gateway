import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TrainersGatewayService } from './trainers-gateway.service';
import { CreateTrainersGatewayDto } from './dto/create-trainers-gateway.dto';
import { UpdateTrainersGatewayDto } from './dto/update-trainers-gateway.dto';

@Controller('trainers')
export class TrainersGatewayController {
  constructor(private readonly trainersGatewayService: TrainersGatewayService) {}

  @Post()
  create(@Body() createTrainersGatewayDto: CreateTrainersGatewayDto) {
    return this.trainersGatewayService.create(createTrainersGatewayDto);
  }

  @Get()
  findAll() {
    return this.trainersGatewayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.trainersGatewayService.findOne(id);
  }

  @Get(':id/pokemon')
  findTrainerWithPokemon(@Param('id', ParseIntPipe) id: number) {
    return this.trainersGatewayService.findTrainerWithPokemon(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTrainersGatewayDto: UpdateTrainersGatewayDto) {
    return this.trainersGatewayService.update(id, updateTrainersGatewayDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.trainersGatewayService.remove(id);
  }
}