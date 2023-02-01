import { Test } from '@nestjs/testing';
import { MangoPayModule, MangoPayService } from '../module';
import { OPTIONS_TYPE } from '../utils';

describe('MangoPayModule', () => {
  const { MANGOPAY_CLIENT_ID, MANGOPAY_API_KEY, MANGOPAY_API_URL } =
    process.env;

  if (!MANGOPAY_CLIENT_ID || !MANGOPAY_API_KEY)
    throw new Error('No MangoPay Client id or Api key is defined in `.env`!');

  const config: typeof OPTIONS_TYPE = {
    clientId: MANGOPAY_CLIENT_ID,
    clientApiKey: MANGOPAY_API_KEY,
    baseUrl: MANGOPAY_API_URL,
  };

  describe('forRoot', () => {
    let mangoPayService: MangoPayService;

    beforeEach(async () => {
      const module = await Test.createTestingModule({
        imports: [MangoPayModule.forRoot(config)],
      }).compile();

      mangoPayService = module.get(MangoPayService);
    });

    it('should provide sentry client', () => {
      expect(mangoPayService).toBeDefined();
    });

    it('should create a test natural user', async () => {
      const user = new mangoPayService.client.models.UserNatural({
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

      const response = await mangoPayService.client.Users.create(user);

      return response;
    });
  });

  describe('forRootAsync with useFactory', () => {
    let mangoPayService: MangoPayService;

    beforeEach(async () => {
      const module = await Test.createTestingModule({
        imports: [MangoPayModule.forRootAsync({ useFactory: () => config })],
      }).compile();

      mangoPayService = module.get(MangoPayService);
    });

    it('should provide sentry client', () => {
      expect(mangoPayService).toBeDefined();
    });

    it('should create a test natural user', async () => {
      const user = new mangoPayService.client.models.UserNatural({
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

      const response = await mangoPayService.client.Users.create(user);

      return response;
    });
  });
});
