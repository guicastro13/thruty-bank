import { Module } from '@nestjs/common';
import { BankController } from './controller/bank.controller';
import { CreateAccountUseCase } from 'src/application/use-cases/create-account-use-cases';
import { CreateAccountUseCaseImplementations } from 'src/application/use-case-implementations/create-account-use-case-implementations';
import { Bank } from 'src/domain/bank-account/bank';

@Module({
  controllers: [BankController],
  exports: [CreateAccountUseCase],
  providers: [
    Bank,
    {
      provide: CreateAccountUseCase,
      useClass: CreateAccountUseCaseImplementations,
    },
  ],
})
export class HttpModule {}
