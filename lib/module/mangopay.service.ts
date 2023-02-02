import Mangopay from 'mangopay2-nodejs-sdk';
import { Inject, Injectable } from '@nestjs/common';
import {
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} from '../utils/mangopay.module-definition';
import { createMangopayClient } from '../utils/mangopay.utils';

@Injectable()
export class MangopayService {
  private readonly mangopaySdk: Mangopay;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: typeof OPTIONS_TYPE,
  ) {
    this.mangopaySdk = createMangopayClient(this.options);
  }

  public get client(): Mangopay {
    return this.mangopaySdk;
  }
}
