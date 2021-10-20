import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialsModule } from './materials/materials.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'valerio',
      password: 'valerio',
      database: 'casavalerio',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MaterialsModule,
  ],
})
export class AppModule {}