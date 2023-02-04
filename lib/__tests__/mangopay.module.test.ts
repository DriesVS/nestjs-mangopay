import { Test } from '@nestjs/testing';
import { MangopayModule } from '../module/mangopay.module';
import { MangopayService } from '../module/mangopay.service';
import { OPTIONS_TYPE } from '../utils/mangopay.module-definition';

describe('MangopayModule', () => {
  const { MANGOPAY_CLIENT_ID, MANGOPAY_API_KEY, MANGOPAY_API_URL } =
    process.env;

  if (!MANGOPAY_CLIENT_ID || !MANGOPAY_API_KEY)
    throw new Error('No Mangopay Client id or Api key is defined in `.env`!');

  const config: typeof OPTIONS_TYPE = {
    clientId: MANGOPAY_CLIENT_ID,
    clientApiKey: MANGOPAY_API_KEY,
    baseUrl: MANGOPAY_API_URL,
  };

  describe('forRoot', () => {
    let mangopayService: MangopayService;

    beforeEach(async () => {
      const module = await Test.createTestingModule({
        imports: [MangopayModule.register(config)],
      }).compile();

      mangopayService = module.get(MangopayService);
    });

    it('should provide sentry client', () => {
      expect(mangopayService).toBeDefined();
    });

    it('should create a test natural user', async () => {
      const user = new mangopayService.models.UserNatural({
        FirstName: 'Victor',
        LastName: 'Hugo',
        Address: '1 rue des Misérables, Paris',
        Birthday: 1300186358,
        Nationality: 'FR',
        CountryOfResidence: 'FR',
        Occupation: 'Writer',
        ProofOfIdentity: null,
        ProofOfAddress: null,
        PersonType: 'NATURAL',
        Email: 'victor@hugo.com',
        Tag: 'custom tag',
      });

      const response = await mangopayService.Users.create(user);

      return response;
    });
  });

  describe('forRootAsync with useFactory', () => {
    let mangopayService: MangopayService;

    beforeEach(async () => {
      const module = await Test.createTestingModule({
        imports: [MangopayModule.registerAsync({ useFactory: () => config })],
      }).compile();

      mangopayService = module.get(MangopayService);
    });

    it('should provide sentry client', () => {
      expect(mangopayService).toBeDefined();
    });

    it('should create a test natural user', async () => {
      const user = new mangopayService.models.UserNatural({
        FirstName: 'Victor',
        LastName: 'Hugo',
        Address: '1 rue des Misérables, Paris',
        Birthday: 1300186358,
        Nationality: 'FR',
        CountryOfResidence: 'FR',
        Occupation: 'Writer',
        ProofOfIdentity: null,
        ProofOfAddress: null,
        PersonType: 'NATURAL',
        Email: 'victor@hugo.com',
        Tag: 'custom tag',
      });

      const response = await mangopayService.Users.create(user);

      return response;
    });
  });
});
