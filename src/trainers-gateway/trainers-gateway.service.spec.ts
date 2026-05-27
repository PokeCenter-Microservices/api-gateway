import { Test, TestingModule } from '@nestjs/testing';
import { TrainersGatewayService } from './trainers-gateway.service';

describe('TrainersGatewayService', () => {
  let service: TrainersGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainersGatewayService],
    }).compile();

    service = module.get<TrainersGatewayService>(TrainersGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
