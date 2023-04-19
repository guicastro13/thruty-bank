import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountUseCase } from 'src/application/use-cases/create-account-use-cases';

@Controller()
export class BankController {
  constructor(private createAccountUseCase: CreateAccountUseCase) {}

  @Post('/new-account')
  createAccount(@Body() body) {
    const { name } = body;
    const account = this.createAccountUseCase.execute(name);
    return account;
  }
}
