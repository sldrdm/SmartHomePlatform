


import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    DevicesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true, // browser üzerinden test edebil
      context: ({ req }) => ({ req }), // ✅ burada request context'i aktarıyoruz
    }),
      AuthModule,
    UsersModule,
    DevicesModule,
  ],
})
export class AppModule {}
