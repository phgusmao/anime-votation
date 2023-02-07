import { Injectable } from '@nestjs/common';
import { CreateVotacaoDto } from './dto/create-votacao.dto';

@Injectable()
export class VotacaoService {
  create(createVotacaoDto: CreateVotacaoDto) {
    return 'This action adds a new votacao';
  }

  findAll() {
    return [{ id: 1, email: 'pedro.gusmao1998@hotmail.com' }];
  }
}
