import Mangopay, { base } from 'mangopay2-nodejs-sdk';
import { Inject, Injectable } from '@nestjs/common';
import {
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} from '../utils/mangopay.module-definition';
import { createMangopayClient } from '../utils/mangopay.utils';
import { Users } from 'mangopay2-nodejs-sdk/typings/services/Users';
import { BankAccounts } from 'mangopay2-nodejs-sdk/typings/services/BankAccounts';
import { BankingAliases } from 'mangopay2-nodejs-sdk/typings/services/BankingAliases';
import { CardPreAuthorizations } from 'mangopay2-nodejs-sdk/typings/services/CardPreauthorizations';
import { CardRegistrations } from 'mangopay2-nodejs-sdk/typings/services/CardRegistrations';
import { Cards } from 'mangopay2-nodejs-sdk/typings/services/Cards';
import { Clients } from 'mangopay2-nodejs-sdk/typings/services/Clients';
import { Deposits } from 'mangopay2-nodejs-sdk/typings/services/Deposits';
import { DisputeDocuments } from 'mangopay2-nodejs-sdk/typings/services/DisputeDocuments';
import { Disputes } from 'mangopay2-nodejs-sdk/typings/services/Disputes';
import { Events } from 'mangopay2-nodejs-sdk/typings/services/Events';
import { Hooks } from 'mangopay2-nodejs-sdk/typings/services/Hooks';
import { Idempotency } from 'mangopay2-nodejs-sdk/typings/services/Idempotency';
import { KycDocuments } from 'mangopay2-nodejs-sdk/typings/services/KycDocuments';
import { Mandates } from 'mangopay2-nodejs-sdk/typings/services/Mandates';
import { PayIns } from 'mangopay2-nodejs-sdk/typings/services/PayIns';
import { PayOuts } from 'mangopay2-nodejs-sdk/typings/services/PayOuts';
import { Refunds } from 'mangopay2-nodejs-sdk/typings/services/Refunds';
import { Regulatory } from 'mangopay2-nodejs-sdk/typings/services/Regulatory';
import { Reports } from 'mangopay2-nodejs-sdk/typings/services/Reports';
import { Repudiations } from 'mangopay2-nodejs-sdk/typings/services/Repudiations';
import { Responses } from 'mangopay2-nodejs-sdk/typings/services/Responses';
import { Transfers } from 'mangopay2-nodejs-sdk/typings/services/Transfers';
import { UboDeclarations } from 'mangopay2-nodejs-sdk/typings/services/UboDeclarations';
import { Wallets } from 'mangopay2-nodejs-sdk/typings/services/Wallets';

@Injectable()
export class MangopayService {
  private readonly mangopaySdk: Mangopay;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: typeof OPTIONS_TYPE,
  ) {
    this.mangopaySdk = createMangopayClient(this.options);
  }

  public get config(): base.Config {
    return this.mangopaySdk.config;
  }

  public get requestOptions(): base.RequestOptions {
    return this.mangopaySdk.requestOptions;
  }
  public get Users(): Users {
    return this.mangopaySdk.Users;
  }
  public get BankAccounts(): BankAccounts {
    return this.mangopaySdk.BankAccounts;
  }
  public get BankingAliases(): BankingAliases {
    return this.mangopaySdk.BankingAliases;
  }
  public get DisputeDocuments(): DisputeDocuments {
    return this.mangopaySdk.DisputeDocuments;
  }
  public get Wallets(): Wallets {
    return this.mangopaySdk.Wallets;
  }
  public get KycDocuments(): KycDocuments {
    return this.mangopaySdk.KycDocuments;
  }
  public get UboDeclarations(): UboDeclarations {
    return this.mangopaySdk.UboDeclarations;
  }
  public get Cards(): Cards {
    return this.mangopaySdk.Cards;
  }
  public get CardRegistrations(): CardRegistrations {
    return this.mangopaySdk.CardRegistrations;
  }
  public get CardPreAuthorizations(): CardPreAuthorizations {
    return this.mangopaySdk.CardPreAuthorizations;
  }
  public get PayIns(): PayIns {
    return this.mangopaySdk.PayIns;
  }
  public get Transfers(): Transfers {
    return this.mangopaySdk.Transfers;
  }
  public get PayOuts(): PayOuts {
    return this.mangopaySdk.PayOuts;
  }
  public get Refunds(): Refunds {
    return this.mangopaySdk.Refunds;
  }

  public get Clients(): Clients {
    return this.mangopaySdk.Clients;
  }
  public get Disputes(): Disputes {
    return this.mangopaySdk.Disputes;
  }
  public get Repudiations(): Repudiations {
    return this.mangopaySdk.Repudiations;
  }
  public get Events(): Events {
    return this.mangopaySdk.Events;
  }
  public get Responses(): Responses {
    return this.mangopaySdk.Responses;
  }
  public get Mandates(): Mandates {
    return this.mangopaySdk.Mandates;
  }
  public get Hooks(): Hooks {
    return this.mangopaySdk.Hooks;
  }
  public get Reports(): Reports {
    return this.mangopaySdk.Reports;
  }
  public get Idempotency(): Idempotency {
    return this.mangopaySdk.Idempotency;
  }
  public get Regulatory(): Regulatory {
    return this.mangopaySdk.Regulatory;
  }
  public get Deposits(): Deposits {
    return this.mangopaySdk.Deposits;
  }
  public get models(): typeof Mangopay.models {
    return this.mangopaySdk.models;
  }
}
