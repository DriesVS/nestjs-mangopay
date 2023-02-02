import MangoPay from 'mangopay2-nodejs-sdk';
import { OPTIONS_TYPE } from './mangoPay.module-definition';

export function createMangoPayClient(options: typeof OPTIONS_TYPE): MangoPay {
  const client = new MangoPay({ ...options });

  return client;
}
