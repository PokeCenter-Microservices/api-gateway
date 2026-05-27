import { Test, TestingModule } from '@nestjs/testing';
import { PokemonGatewayController } from './pokemon-gateway.controller';
import { PokemonGatewayService } from './pokemon-gateway.service';

describe('PokemonGatewayController', () => {
  let controller: PokemonGatewayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonGatewayController],
      providers: [PokemonGatewayService],
    }).compile();

    controller = module.get<PokemonGatewayController>(PokemonGatewayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
