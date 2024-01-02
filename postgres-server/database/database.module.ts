import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'insight.cf8mu8ksyya3.eu-central-1.rds.amazonaws.com',
        port: 5432,
        database: 'insight',
        username: 'Vinko',
        password: 'Vinko_324',
        schema: 'insight-schema',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class PostgresModule {}
