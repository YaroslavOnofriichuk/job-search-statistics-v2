import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsResolver } from './tags.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from 'src/entities/tag/tag.entity';

@Module({
  providers: [TagsResolver, TagsService],
  imports: [TypeOrmModule.forFeature([Tag])],
})
export class TagsModule {}
