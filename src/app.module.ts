import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonGatewayModule } from './pokemon-gateway/pokemon-gateway.module';
import { TrainersGatewayModule } from './trainers-gateway/trainers-gateway.module';

@Module({
  imports: [PokemonGatewayModule, TrainersGatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}