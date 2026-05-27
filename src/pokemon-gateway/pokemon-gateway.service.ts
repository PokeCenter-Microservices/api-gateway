import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePokemonGatewayDto } from './dto/create-pokemon-gateway.dto';
import { UpdatePokemonGatewayDto } from './dto/update-pokemon-gateway.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PokemonGatewayService {
  constructor(
    @Inject('POKEMON_SERVICE')
    private readonly pokemonServiceClient: ClientProxy,
    @Inject('TRAINERS_SERVICE')
    private readonly trainersServiceClient: ClientProxy,
  ) {}

  async create(createPokemonGatewayDto: CreatePokemonGatewayDto) {
    const trainer = await firstValueFrom(
      this.trainersServiceClient.send(
        { cmd: 'findOneTrainer' },
        createPokemonGatewayDto.trainerId,
      ),
    );

    if (!trainer) {
      throw new NotFoundException(
        `Entrenador con ID ${createPokemonGatewayDto.trainerId} no encontrado`,
      );
    }

    return this.pokemonServiceClient.send(
      { cmd: 'createPokemon' },
      createPokemonGatewayDto,
    );
  }

  findAll() {
    return this.pokemonServiceClient.send({ cmd: 'findAllPokemons' }, {});
  }

  findOne(id: number) {
    return this.pokemonServiceClient.send({ cmd: 'findOnePokemon' }, id);
  }

  update(id: number, updatePokemonGatewayDto: UpdatePokemonGatewayDto) {
    return this.pokemonServiceClient.send(
      { cmd: 'updatePokemon' },
      { id, ...updatePokemonGatewayDto },
    );
  }

  remove(id: number) {
    return this.pokemonServiceClient.send({ cmd: 'deletePokemon' }, id);
  }
}