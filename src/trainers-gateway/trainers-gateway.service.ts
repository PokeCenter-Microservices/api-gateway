import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTrainersGatewayDto } from './dto/create-trainers-gateway.dto';
import { UpdateTrainersGatewayDto } from './dto/update-trainers-gateway.dto';

@Injectable()
export class TrainersGatewayService {
  constructor(
    @Inject('TRAINERS_SERVICE')
    private readonly trainersServiceClient: ClientProxy,
  ) {}

  create(createTrainersGatewayDto: CreateTrainersGatewayDto) {
    return this.trainersServiceClient.send({ cmd: 'createTrainer' }, createTrainersGatewayDto);
  }

  findAll() {
    return this.trainersServiceClient.send({ cmd: 'findAllTrainers' }, {});
  }

  findOne(id: number) {
    return this.trainersServiceClient.send({ cmd: 'findOneTrainer' }, id);
  }

  update(id: number, updateTrainersGatewayDto: UpdateTrainersGatewayDto) {
    return this.trainersServiceClient.send({ cmd: 'updateTrainer' }, { id, ...updateTrainersGatewayDto });
  }

  remove(id: number) {
    return this.trainersServiceClient.send({ cmd: 'deleteTrainer' }, id);
  }
}