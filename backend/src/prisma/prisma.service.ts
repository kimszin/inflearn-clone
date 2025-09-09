import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// prisma 모듈이 처음 뜰때 db에 연결하겠다는 의미
// 이렇게 prisma 서비스를 만들어두면 다른데서 prisma 서비스를 prisma client처럼 가져다 쓸 수 있음
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
