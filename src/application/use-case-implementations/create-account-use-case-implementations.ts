import { Bank } from 'src/domain/bank-account/bank';
import { CreateAccountUseCase } from '../use-cases/create-account-use-cases';
import { Account } from 'src/domain/bank-account/account';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateAccountUseCaseImplementations extends CreateAccountUseCase {
  constructor(private bank: Bank) {
    super();
  }

  execute(name: string): Account {
    const account_bank = this.bank.createAccount(name);
    console.log('ACCOUNT CREATE WITH SUCCESS:', account_bank);
    return account_bank;
  }
}
