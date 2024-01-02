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
  host: 'postgresql-159670-0.cloudclusters.net',
  port: 18290,
  database: 'Insight',
  username: 'Vinko',
  password: 'Vinko_324',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  autoLoadEntities: true,
};
