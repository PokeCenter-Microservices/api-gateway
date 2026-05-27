import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PokemonGatewayService } from './pokemon-gateway.service';
import { CreatePokemonGatewayDto } from './dto/create-pokemon-gateway.dto';
import { UpdatePokemonGatewayDto } from './dto/update-pokemon-gateway.dto';

@Controller('pokemon')
export class PokemonGatewayController {
  constructor(private readonly pokemonGatewayService: PokemonGatewayService) {}

  @Post()
  create(@Body() createPokemonGatewayDto: CreatePokemonGatewayDto) {
    return this.pokemonGatewayService.create(createPokemonGatewayDto);
  }

  @Get()
  findAll() {
    return this.pokemonGatewayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonGatewayService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePokemonGatewayDto: UpdatePokemonGatewayDto) {
    return this.pokemonGatewayService.update(id, updatePokemonGatewayDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonGatewayService.remove(id);
  }
}