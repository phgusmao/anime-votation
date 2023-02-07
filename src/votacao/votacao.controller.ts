import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VotacaoService } from './votacao.service';
import { CreateVotacaoDto } from './dto/create-votacao.dto';
import { UpdateVotacaoDto } from './dto/update-votacao.dto';

@Controller('votacao')
export class VotacaoController {
  constructor(private readonly votacaoService: VotacaoService) {}

  @Post()
  create(@Body() createVotacaoDto: CreateVotacaoDto) {
    return this.votacaoService.create(createVotacaoDto);
  }

  @Get()
  findAll() {
    return this.votacaoService.findAll();
  }
}
