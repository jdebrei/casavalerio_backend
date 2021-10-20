import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMaterialDto } from './dto/create-material.dto';
import { Material } from './material.entity';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private readonly materialsRepository: Repository<Material>,
  ) {}

  create({id, name, price}: CreateMaterialDto): Promise<Material> {
    return this.materialsRepository.save({
      id, name, price
    });
  }

  async findAll(): Promise<Material[]> {
    return this.materialsRepository.find();
  }

  findOne(id: string): Promise<Material> {
    return this.materialsRepository.findOne(id);
  }

  // TODO: Add UpdateMaterialDTO
  async updateOne(id: string, data: any): Promise<any> {
    // return this.materialsRepository.update(id);
  }

  async remove(id: string): Promise<void> {
    await this.materialsRepository.delete(id);
  }
}