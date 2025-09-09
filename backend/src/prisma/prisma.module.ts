import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // prisma는 전역적으로 접근하게 처리
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
