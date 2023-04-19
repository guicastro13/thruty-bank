import { Account } from './account';

describe('Account', () => {
  it('should create an instance', () => {
    expect(new Account('Guilherme')).toBeTruthy();
    expect(new Account('Guilherme').getName()).toBe('Guilherme');
    expect(new Account('Guilherme').getId()).toBeTruthy();
  });
  it('balance was should not have a value, must to be 0', () => {
    expect(new Account('Guilherme').getBalance()).toBe(0);
  });
  it('extract was should not have a value, must to be []', () => {
    expect(new Account('Guilherme').getExtract()).toEqual([]);
  });
  it('should deposit 100', () => {
    const account = new Account('Guilherme');
    account.deposit(100);
    expect(account.getBalance()).toBe(100);
  });
  it('should withdraw 100', () => {
    const account = new Account('Guilherme');
    account.deposit(200);
    account.withdraw(100);
    expect(account.getBalance()).toBe(100);
  });
  it('should not withdraw 100', () => {
    const account = new Account('Guilherme');
    account.deposit(100);
    expect(() => account.withdraw(200)).toThrowError(
      'Not possible to withdraw, you have not enough balance',
    );
  });
});
