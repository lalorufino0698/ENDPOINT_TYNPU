import { Controller, Inject } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CertificatesCertificateRegisterUseCases } from 'src/application/use-cases/certificatesCertificateRegister.use-cases';
import { LoggerService } from 'src/infrastructure/config/logger/logger.service';
import { UseCaseProxy } from 'src/infrastructure/usecases-proxy/usecases-proxy';
import { UseCasesProxyModule } from 'src/infrastructure/usecases-proxy/usecases-proxy.module';
import { ResponsePresenter } from './presenter/proofsCertificateRegister.presenter';

@Controller()
@ApiTags('Constancias')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(ResponsePresenter)
export class ConstanciasController {                 
  constructor(
    @Inject(UseCasesProxyModule.CERTIFICATES_CERTIFICATE_REGISTER)
    private readonly certificatesCertificateRegisterUseCases: UseCaseProxy<CertificatesCertificateRegisterUseCases>,
    private readonly loggerService: LoggerService
  ) {}
}
@Post('tramites/constanciasCertificados/registro')
@ApiResponseType(ResponsePresenter, true)
