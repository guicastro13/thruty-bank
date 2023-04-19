import { Bank } from './bank';

describe('Bank', () => {
  it('should create an account', () => {
    const bank = new Bank();
    const account = bank.createAccount('Guilherme');
    expect(account).toBeTruthy();
    expect(account.getName()).toBe('Guilherme');
    expect(account.getId()).toBeTruthy();
  });
  it('should create two accounts', () => {
    const bank = new Bank();
    const account1 = bank.createAccount('Guilherme');
    const account2 = bank.createAccount('Guilherme');
    expect(account1.getId()).not.toBe(account2.getId());
  });
  it('should get all accounts', () => {
    const bank = new Bank();
    const account1 = bank.createAccount('Guilherme');
    const account2 = bank.createAccount('Guilherme');
    expect(bank.getAccounts()).toEqual([account1, account2]);
  });
  it('should get an account by id', () => {
    const bank = new Bank();
    const account1 = bank.createAccount('Guilherme');
    const account2 = bank.createAccount('Guilherme');
    expect(bank.getAccountById(account1.getId())).toEqual(account1);
    expect(bank.getAccountById(account2.getId())).toEqual(account2);
  });
  it('should be able to transfer money to other account', () => {
    const bank = new Bank();
    const account1 = bank.createAccount('Guilherme');
    const account2 = bank.createAccount('Guilherme');
    account1.deposit(200);
    account1.makeTransfer(100, account2);
    const extrato = account1.getExtract();
    console.log(extrato);
    expect(account1.getBalance()).toBe(100);
    expect(account2.getBalance()).toBe(100);
  });
});
