import { DynamicModule, Module } from '@nestjs/common';
import { LoggerModule } from '../config/logger/logger.module';
import { RepositoriesModule } from '../persistence/repository.module';
import { DataBaseConstanciasRepository } from '../persistence/repositories/constancias.repository';
import { LoggerService } from '../config/logger/logger.service';
import { UseCaseProxy } from './usecases-proxy';
import { CertificatesCertificateRegisterUseCases } from 'src/application/use-cases/certificatesCertificateRegister/certificatesCertificateRegister.use-cases';
@Module({
  imports: [
    LoggerModule,
    RepositoriesModule,
    //ExceptionModule,
  ],
})
export class UseCasesProxyModule {
  //usecases

  static CERTIFICATES_CERTIFICATE_REGISTER = 'CertificatesCertificateRegister';

  static register(): DynamicModule {
    return {
      module: UseCasesProxyModule,
      providers: [
        {
          inject: [DataBaseConstanciasRepository, LoggerService],
          provide: UseCasesProxyModule.CERTIFICATES_CERTIFICATE_REGISTER,                          
          useFactory: (
            proofsCertificateRepository: DataBaseConstanciasRepository,
            logger: LoggerService
          ) => new UseCaseProxy(new CertificatesCertificateRegisterUseCases(proofsCertificateRepository)),
        }
      ],
      exports: [
        UseCasesProxyModule.CERTIFICATES_CERTIFICATE_REGISTER
      ],
    };
  }
}
