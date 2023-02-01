import { Inject, Injectable } from '@nestjs/common';
import {
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} from '../utils/mangoPay.module-definition';
import { createMangoPayClient } from '../utils/mangoPay.utils';

import type { MangoPayClient } from '../utils';

@Injectable()
export class MangoPayService {
  private readonly mangoPaySdk: MangoPayClient;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: typeof OPTIONS_TYPE,
  ) {
    this.mangoPaySdk = createMangoPayClient(this.options);
  }

  public get client(): MangoPayClient {
    return this.mangoPaySdk;
  }
}
