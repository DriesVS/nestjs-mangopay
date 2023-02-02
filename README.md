<p align="center">
  <h3 align="center">
    nestjs-mangopay
  </h3>

  <p align="center" width=50 height=50>
    <img src="https://user-images.githubusercontent.com/11197291/216096444-f44d973e-73b7-4026-9aa9-9c811fd83669.jpg"/>
  </p>

  <p align="center">
    Injectable Mangopay client for <a href="https://nestjs.com/">Nestjs</a>. Using the Nodejs dependency <a href="https://github.com/Mangopay/mangopay2-nodejs-sdk">mangopay2-nodejs-sdk</a>.
  </p>
</p>

[![Release](https://github.com/nabeelhayat/nestjs-mangopay/actions/workflows/create-release.yml/badge.svg)](https://github.com/nabeelhayat/nestjs-mangopay/actions/workflows/create-release.yml)
[![Publish](https://github.com/nabeelhayat/nestjs-mangopay/actions/workflows/publish.yml/badge.svg)](https://github.com/nabeelhayat/nestjs-mangopay/actions/workflows/publish.yml)[![MIT licensed](https://img.shields.io/github/license/nabeelhayat/nestjs-mangopay)](https://raw.githubusercontent.com/nabeelhayat/nestjs-mangopay/master/LICENSE)



Implementing the `MangopayModule` from this package you gain access to Mangopay client through dependency injection with minimal setup.

## Instalation

```bash
$ npm install --save nestjs-mangopay
```

```bash
$ yarn add nestjs-mangopay
```

## Getting Started

To use Mangopay client we need to register module for example in app.module.ts

```typescript
import { MangopayModule } from 'nestjs-mangopay';

@Module({
  imports: [
    MangopayModule.forRoot({
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
import { MangopayService } from 'nestjs-mangopay';

@Injectable()
export class AppService {
  public constructor(private readonly mangopayService: MangopayService) {}

  async createUser() {
    return this.mangopayService.client.users.create({
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

For full Client API see Mangopay Node SDK reference [here](https://github.com/Mangopay/mangopay2-nodejs-sdk)

## Testing

Example of testing can be found [here](https://github.com/nabeelhayat/nestjs-mangopay/blob/master/lib/__tests__/mangoPay.module.test.ts).
