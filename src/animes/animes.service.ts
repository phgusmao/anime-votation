import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';

@Injectable()
export class AnimesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.anime.findMany();
  }

  async rank() {
    const votacoes = await this.prisma.votacao.groupBy({
      by: ['animeId'],
      _count: { animeId: true },
      orderBy: { _count: { animeId: 'desc' } },
    });

    return Promise.all(
      votacoes.map(async (votacao) => {
        const anime = await this.prisma.anime.findFirst({
          where: { id: votacao.animeId },
        });

        return {
          anime,
          votos: votacao._count.animeId,
        };
      }),
    );
  }
}
