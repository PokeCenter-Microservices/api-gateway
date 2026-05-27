import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonGatewayModule } from './pokemon-gateway/pokemon-gateway.module';

@Module({
  imports: [PokemonGatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}