import Mangopay from 'mangopay2-nodejs-sdk';
import { OPTIONS_TYPE } from './mangopay.module-definition';

export function createMangopayClient(options: typeof OPTIONS_TYPE): Mangopay {
  const client = new Mangopay({ ...options });

  return client;
}
