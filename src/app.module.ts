import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './auth/auth.js';
import { UserModule } from './user/user.module.js';
import { InvoiceModule } from './invoice/invoice.module.js';
@Module({
  imports: [
    AuthModule.forRoot({ auth }),
    AuthModule,
    PrismaModule,
    UserModule,
    InvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
