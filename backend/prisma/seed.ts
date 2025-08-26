import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  // 기존에 존재하던 카테고리 삭제
  await prisma.courseCategory.deleteMany({});

  const categories = [
    {
      id: uuidv4(),
      name: '개발 · 프로그래밍',
      slug: 'it-programming',
      description: '',
    },
    {
      id: uuidv4(),
      name: '게임 개발',
      slug: 'game-dev-all',
      description: '',
    },
    {
      id: uuidv4(),
      name: '데이터 사이언스',
      slug: 'data-science',
      description: '',
    },
    {
      id: uuidv4(),
      name: '인공지능',
      slug: 'artificial-intelligence',
      description: '',
    },
    {
      id: uuidv4(),
      name: '보안 · 네트워크',
      slug: 'it',
      description: '',
    },
    {
      id: uuidv4(),
      name: '하드웨어',
      slug: 'hardware',
      description: '',
    },
    {
      id: uuidv4(),
      name: '디자인 · 아트',
      slug: 'design',
      description: '',
    },
    {
      id: uuidv4(),
      name: '기획 · 경영 · 마케팅',
      slug: 'business',
      description: '',
    },
    {
      id: uuidv4(),
      name: '업무 생산성',
      slug: 'productivity',
      description: '',
    },
    {
      id: uuidv4(),
      name: '커리어 · 자기계발',
      slug: 'career',
      description: '',
    },
    {
      id: uuidv4(),
      name: '대학 교육',
      slug: 'academics',
      description: '',
    },
  ];

  await prisma.courseCategory.createMany({
    data: categories,
  });

  console.log('카테고리 시드 데이터가 성공적으로 생성되었습니다.');
}

main()
  .catch((error) => {
    console.error('시드 데이터 생성 중 오류가 발생했습니다', error);
    process.exit(1);
  })
  // prisma.$disconnect()는 비동기 함수니까 await가 필요.
  // 그런데 finally()는 스펙상 return이 없어야 함(cleanup 용도로 사용하기 때문)
  // prisma.$disconnect()는 Promise<void>를 반환하는 비동기 함수로,
  // await 없이 호출하면 데이터베이스 연결이 완전히 종료되기 전에 프로세스가 종료될 수 있음.
  // 밑의 주석을 넣는 것으로 해당 코드에서만 eslint를 무시할 수 있음.
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
