import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/*export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'insight.cf8mu8ksyya3.eu-central-1.rds.amazonaws.com',
  port: 5432,
  database: 'insight',
  username: 'Vinko',
  password: 'Vinko_324',
  schema: 'insight-schema',
 // entities: [__dirname + '/../**/ //*.entity{.ts,.js}'],
//synchronize: true,
//autoLoadEntities: true,
//};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'pg-260dbd96-insight-1.a.aivencloud.com',
  port: 27072,
  username: 'avnadmin',
  password: 'AVNS_uRIoPtSKRGOy-LBIU9T',
  database: 'Insight',
  schema: 'insight',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
