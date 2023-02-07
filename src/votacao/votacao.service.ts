import { Injectable } from '@nestjs/common';
import { CreateVotacaoDto } from './dto/create-votacao.dto';
import { UpdateVotacaoDto } from './dto/update-votacao.dto';

@Injectable()
export class VotacaoService {
  create(createVotacaoDto: CreateVotacaoDto) {
    return 'This action adds a new votacao';
  }

  findAll() {
    return `This action returns all votacao`;
  }
}
