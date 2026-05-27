import { Test, TestingModule } from '@nestjs/testing';
import { PokemonGatewayService } from './pokemon-gateway.service';

describe('PokemonGatewayService', () => {
  let service: PokemonGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonGatewayService],
    }).compile();

    service = module.get<PokemonGatewayService>(PokemonGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
