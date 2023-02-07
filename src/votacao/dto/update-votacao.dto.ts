import { PartialType } from '@nestjs/mapped-types';
import { CreateVotacaoDto } from './create-votacao.dto';

export class UpdateVotacaoDto extends PartialType(CreateVotacaoDto) {}
