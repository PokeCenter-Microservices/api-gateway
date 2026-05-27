import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTrainersGatewayDto } from './dto/create-trainers-gateway.dto';
import { UpdateTrainersGatewayDto } from './dto/update-trainers-gateway.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TrainersGatewayService {
  constructor(
    @Inject('TRAINERS_SERVICE')
    private readonly trainersServiceClient: ClientProxy,
    @Inject('POKEMON_SERVICE')
    private readonly pokemonServiceClient: ClientProxy,
  ) {}

  create(createTrainersGatewayDto: CreateTrainersGatewayDto) {
    return this.trainersServiceClient.send({ cmd: 'createTrainer' }, createTrainersGatewayDto);
  }

  findAll() {
    return this.trainersServiceClient.send({ cmd: 'findAllTrainers' }, {});
  }

  findOne(id: number) {
    return this.trainersServiceClient.send({ cmd: 'findOneTrainer' }, id);
  }

  async findTrainerWithPokemon(id: number) {
    const trainer = await firstValueFrom(
      this.trainersServiceClient.send({ cmd: 'findOneTrainer' }, id),
    );
    const pokemon = await firstValueFrom(
      this.pokemonServiceClient.send({ cmd: 'findPokemonsByTrainer' }, id),
    );
    return {
      trainer,
      pokemon,
    };
  }

  update(id: number, updateTrainersGatewayDto: UpdateTrainersGatewayDto) {
    return this.trainersServiceClient.send({ cmd: 'updateTrainer' }, { id, ...updateTrainersGatewayDto });
  }

  async remove(id: number) {
    const pokemon = await firstValueFrom(
      this.pokemonServiceClient.send({ cmd: 'findPokemonsByTrainer' }, id),
    );

    if (pokemon.length > 0) {
      throw new BadRequestException(
        `No puedes eliminar el entrenador con ID ${id} porque tiene ${pokemon.length} Pokémon asignados`,
      );
    }

    return this.trainersServiceClient.send({ cmd: 'deleteTrainer' }, id);
  }
}