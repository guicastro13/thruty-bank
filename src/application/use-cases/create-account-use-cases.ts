import { Account } from 'src/domain/bank-account/account';

export abstract class CreateAccountUseCase {
  abstract execute(name: string): Account;
}
