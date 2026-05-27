import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PokemonGatewayController } from './pokemon-gateway.controller';
import { PokemonGatewayService } from './pokemon-gateway.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'POKEMON_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
      {
        name: 'TRAINERS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [PokemonGatewayController],
  providers: [PokemonGatewayService],
})
export class PokemonGatewayModule {}