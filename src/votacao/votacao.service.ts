import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateVotacaoDto } from './dto/create-votacao.dto';

@Injectable()
export class VotacaoService {
  constructor(private prisma: PrismaService) {}

  create(dados: CreateVotacaoDto) {
    return this.prisma.votacao.upsert({
      where: { email: dados.email },
      update: { animeId: dados.animeId },
      create: dados,
    });
  }

  findAll() {
    return this.prisma.votacao.findMany({
      take: 5,
      orderBy: { id: 'desc' },
      include: { anime: true },
    });
  }
}
