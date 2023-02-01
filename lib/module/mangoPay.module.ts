import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from '../utils';
import { MangoPayService } from './mangoPay.service';

@Module({
  providers: [MangoPayService],
  exports: [MangoPayService],
})
export class MangoPayModule extends ConfigurableModuleClass {}
