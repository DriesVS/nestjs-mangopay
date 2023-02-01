<p align="center">
  <h3 align="center">
    mangopay-nestjs
  </h3>

  <p align="center" width=50 height=50>
    <img src="https://user-images.githubusercontent.com/11197291/215848127-ffd3248c-f132-4224-9674-56acc39d1513.jpg"/>
  </p>

  <p align="center">
    Injectable MangoPay client for <a href="https://nestjs.com/">Nestjs</a>.
  </p>
</p>

[![Publish](https://github.com/nabeelhayat/mangopay-nestjs/actions/workflows/publish.yml/badge.svg)](https://github.com/nabeelhayat/mangopay-nestjs/actions/workflows/publish.yml)

Implementing the `MangoPayModule` from this package you gain access to MangoPay client through dependency injection with minimal setup.

## Instalation

```bash
$ npm install --save mangopay-nestjs
```

```bash
$ yarn add mangopay-nestjs
```

## Getting Started

To use MangoPay client we need to register module for example in app.module.ts

```typescript
import { MangoPayModule } from 'mangopay-nestjs';

@Module({
  imports: [
    MangoPayModule.forRoot({
      clientId: process.env.MANGOPAY_CLIENT_ID,
      clientApiKey: process.env.MANGOPAY_API_KEY,
      baseUrl: process.env.MANGOPAY_API_URL,
    }),
  ],
})
export class AppModule {}
```
Example usage in service.

```typescript
import { MangoPayService } from 'mangopay-nestjs';

@Injectable()
export class AppService {
  public constructor(private readonly mangoPayService: MangoPayService) {}

  async createUser() {
    return this.mangoPayService.client.users.create({
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
  }
}
```

For full Client API see MangoPay Node SDK reference [here](https://github.com/Mangopay/mangopay2-nodejs-sdk)

## Testing

Example of testing can be found [here](https://github.com/nabeelhayat/mangopay-nestjs/blob/development/lib/__tests__/mangoPay.module.test.ts).
