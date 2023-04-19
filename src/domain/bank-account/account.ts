import { randomUUID } from 'crypto';

export class Account {
  private id: string;
  private name: string;
  private balance: number;
  private extract: Extract[];

  constructor(name) {
    this.id = randomUUID();
    this.name = name;
    this.balance = 0;
    this.extract = [];
    this.guaranteAccountBalanceAndExtract(this.balance, this.extract);
  }

  guaranteAccountBalanceAndExtract(balance, extract) {
    if (balance !== 0) {
      throw new Error('Balance must be 0');
    }
    if (extract.length !== 0) {
      throw new Error('Extract must be empty');
    }
  }

  deposit(value: number) {
    this.extract.push({
      date: new Date(),
      description: 'Deposit',
      type: Type.DEPOSIT,
      value,
    });
    this.balance += value;
  }

  withdraw(value: number) {
    this.makeNotPossibleToWithdraw(value);
    this.extract.push({
      date: new Date(),
      description: 'Withdraw',
      type: Type.WITHDRAW,
      value,
    });
    this.balance -= value;
  }

  makeTransfer(value: number, account: Account) {
    this.makeNotPossibleToWithdraw(value);
    this.extract.push({
      date: new Date(),
      description: `Transfer to ${account.getName()}`,
      type: Type.TRANSFER_TO,
      value,
    });
    this.balance -= value;
    account.reciveTransfer(value, this);
  }

  reciveTransfer(value: number, account: Account) {
    this.extract.push({
      date: new Date(),
      description: `Transfer from ${account.getName()}`,
      type: Type.TRANSFER_FROM,
      value,
    });
    this.balance += value;
  }

  getBalance() {
    return this.balance;
  }

  getExtract() {
    return this.extract;
  }

  makeNotPossibleToWithdraw(value: number) {
    if (value > this.balance) {
      throw new Error('Not possible to withdraw, you have not enough balance');
    }
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

export class Type {
  static readonly DEPOSIT = 'DEPOSIT';
  static readonly WITHDRAW = 'WITHDRAW';
  static readonly TRANSFER_TO = 'TRANSFER_TO';
  static readonly TRANSFER_FROM = 'TRANSFER_FROM';
}

export class Extract {
  date: Date;
  description: string;
  type: Type;
  value: number;
}
