import { Test, TestingModule } from '@nestjs/testing';
import { TrainersGatewayController } from './trainers-gateway.controller';
import { TrainersGatewayService } from './trainers-gateway.service';

describe('TrainersGatewayController', () => {
  let controller: TrainersGatewayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainersGatewayController],
      providers: [TrainersGatewayService],
    }).compile();

    controller = module.get<TrainersGatewayController>(TrainersGatewayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
