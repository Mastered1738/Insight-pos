import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgresql-159066-0.cloudclusters.net',
  port: 19786,
  database: 'Insight-postgres',
  username: 'Vinko',
  password: 'Vinko_324',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  schema: 'insight-schema',
  synchronize: false,
};
