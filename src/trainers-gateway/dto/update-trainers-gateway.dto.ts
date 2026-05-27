import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainersGatewayDto } from './create-trainers-gateway.dto';

export class UpdateTrainersGatewayDto extends PartialType(CreateTrainersGatewayDto) {}