import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateVotacaoDto } from './dto/create-votacao.dto';

@Injectable()
export class VotacaoService {
  constructor(private prisma: PrismaService) {}

  create(createVotacaoDto: CreateVotacaoDto) {
    return this.prisma.votacao.create({ data: createVotacaoDto });
  }

  findAll() {
    return this.prisma.votacao.findMany();
  }
}
