import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

// Modüller
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { AutomationModule } from './automation/automation.module';
import { NotificationModule } from './notification/notification.module';
import { SensorModule } from './sensor/sensor.module';
// Entity'ler (manuel eklemene gerek yok aslında, autoLoadEntities kullanınca)
import { Automation } from './automation/entities/automation.entity';


@Module({
  imports: [
    // PostgreSQL bağlantısı
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'smart_home',
      synchronize: true, // sadece geliştirme aşamasında açık kalsın
      autoLoadEntities: true,
    }),

    // GraphQL konfigürasyonu
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      context: ({ req }) => ({ req }),
    }),

    // Uygulama modülleri
    AuthModule,
    UsersModule,
    DevicesModule,
    AutomationModule,
    NotificationModule,
    SensorModule,
  ],
})
export class AppModule {}
