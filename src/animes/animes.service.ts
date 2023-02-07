import { Injectable } from '@nestjs/common';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';

@Injectable()
export class AnimesService {
  findAll() {
    return [
      { id: 1, titulo: 'Bleach' },
      { id: 2, titulo: 'Spy x Family' },
      { id: 3, titulo: 'Naruto Shippuden' },
    ];
  }

  rank() {
    return 'Melhores';
  }
}
