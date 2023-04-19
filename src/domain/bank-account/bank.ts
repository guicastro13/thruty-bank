import { Injectable } from '@nestjs/common';
import { Account } from './account';

@Injectable()
export class Bank {
  private accounts: Account[] = [];

  createAccount(name: string): Account {
    const account = new Account(name);
    this.accounts.push(account);
    return account;
  }

  getAccounts(): Account[] {
    return this.accounts;
  }
  getAccountById(id: string): Account {
    return this.accounts.find((account) => account.getId() === id);
  }
}
