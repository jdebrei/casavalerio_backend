import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Material } from './material.entity';
import { MaterialsController } from './materials.controller';
import { MaterialsService } from './materials.service';

@Module({
  imports: [TypeOrmModule.forFeature([Material])],
  providers: [MaterialsService],
  controllers: [MaterialsController],
})
export class MaterialsModule {}