import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spaceship } from '../spaceships/spaceship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spaceship])],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}