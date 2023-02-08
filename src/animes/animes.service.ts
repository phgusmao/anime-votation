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

  rank() {
    return 'Melhores';
  }
}
