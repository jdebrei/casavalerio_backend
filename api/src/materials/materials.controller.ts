import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { Material } from './material.entity';
import { MaterialsService } from './materials.service';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Post()
  create(@Body() createMaterialDto: CreateMaterialDto): Promise<Material> {
    return this.materialsService.create(createMaterialDto);
  }

  @Get()
  async findAll(): Promise<Material[]> {
    return this.materialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Material> {
    return this.materialsService.findOne(id);
  }

  @Patch()
  updateOne(@Param('id') id: string): Promise<Material> {
    return this.materialsService.updateOne(id, {});
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.materialsService.remove(id);
  }
}