import MangoPay from 'mangopay2-nodejs-sdk';
import { MangoPayClient } from './mangoPay.interface';
import { OPTIONS_TYPE } from './mangoPay.module-definition';

export function createMangoPayClient(
  options: typeof OPTIONS_TYPE,
): MangoPayClient {
  const client = new MangoPay({ ...options });

  return client;
}
