import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from 'src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/')
      .expect(200)
      .then((res) => {
          expect(res.text).toEqual('Hello World!');
      });
  });
});
