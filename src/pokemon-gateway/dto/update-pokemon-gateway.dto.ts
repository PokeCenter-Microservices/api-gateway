import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonGatewayDto } from './create-pokemon-gateway.dto';

export class UpdatePokemonGatewayDto extends PartialType(CreatePokemonGatewayDto) {}