import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnimesService } from './animes.service';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';

@Controller('animes')
export class AnimesController {
  constructor(private readonly service: AnimesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('/rank')
  rank() {
    return this.service.rank();
  }
}
