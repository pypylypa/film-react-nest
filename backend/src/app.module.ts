import { Module } from '@nestjs/common';
import {ServeStaticModule} from "@nestjs/serve-static";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { FilmsModule } from './films/films.module';
import { OrderModule } from './order/order.module';
import { join } from 'path';
import {configProvider} from "./app.config.provider";

@Module({
  imports: [
	ConfigModule.forRoot({
          isGlobal: true,
          cache: true
      }),
      // @todo: Добавьте раздачу статических файлов из public
  MongooseModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
          uri: config.get('DATABASE_URL'),
        }),
          inject: [ConfigService],
      }),
  ServeStaticModule.forRoot({
          rootPath: join(__dirname, '..', 'public/content/afisha'),
          serveRoot: '/content/afisha',
      }),
  FilmsModule,
  OrderModule,
  ],
  controllers: [],
  providers: [configProvider],
})
export class AppModule {}
