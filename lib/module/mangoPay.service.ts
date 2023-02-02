import { Inject, Injectable } from '@nestjs/common';
import {
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} from '../utils/mangoPay.module-definition';
import { createMangoPayClient } from '../utils/mangoPay.utils';
import MangoPay from '../utils/mangoPay.interface';

@Injectable()
export class MangoPayService {
  private readonly mangoPaySdk: MangoPay;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: typeof OPTIONS_TYPE,
  ) {
    this.mangoPaySdk = createMangoPayClient(this.options);
  }

  public get client(): MangoPay {
    return this.mangoPaySdk;
  }
}
