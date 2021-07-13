import { NestFactory } from '@nestjs/core';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const options: ClientOptions = {
    transport: Transport.TCP,
    options: {
      port: 8877,
      host: '0.0.0.0',
    },
  };

  const app = await NestFactory.createMicroservice(AppModule, options);
  app.listen();
}
bootstrap();
