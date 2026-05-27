import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TrainersGatewayController } from './trainers-gateway.controller';
import { TrainersGatewayService } from './trainers-gateway.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TRAINERS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3002,
        },
      },
      {
        name: 'POKEMON_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [TrainersGatewayController],
  providers: [TrainersGatewayService],
})
export class TrainersGatewayModule {}