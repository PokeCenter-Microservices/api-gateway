import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePokemonGatewayDto } from './dto/create-pokemon-gateway.dto';
import { UpdatePokemonGatewayDto } from './dto/update-pokemon-gateway.dto';

@Injectable()
export class PokemonGatewayService {
  constructor(
    @Inject('POKEMON_SERVICE')
    private readonly pokemonServiceClient: ClientProxy,
  ) {}

  create(createPokemonGatewayDto: CreatePokemonGatewayDto) {
    return this.pokemonServiceClient.send({ cmd: 'createPokemon' }, createPokemonGatewayDto);
  }

  findAll() {
    return this.pokemonServiceClient.send({ cmd: 'findAllPokemons' }, {});
  }

  findOne(id: number) {
    return this.pokemonServiceClient.send({ cmd: 'findOnePokemon' }, id);
  }

  update(id: number, updatePokemonGatewayDto: UpdatePokemonGatewayDto) {
    return this.pokemonServiceClient.send({ cmd: 'updatePokemon' }, { id, ...updatePokemonGatewayDto });
  }

  remove(id: number) {
    return this.pokemonServiceClient.send({ cmd: 'deletePokemon' }, id);
  }
}