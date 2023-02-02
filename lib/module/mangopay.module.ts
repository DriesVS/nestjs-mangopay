import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from '../utils/mangopay.module-definition';
import { MangopayService } from './mangopay.service';

@Module({
  providers: [MangopayService],
  exports: [MangopayService],
})
export class MangopayModule extends ConfigurableModuleClass {}
