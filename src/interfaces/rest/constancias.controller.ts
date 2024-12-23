import { Controller, Inject, Post, Query, Req, Res } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CertificatesCertificateRegisterUseCases } from 'src/application/use-cases/certificatesCertificateRegister/certificatesCertificateRegister.use-cases';
import { LoggerService } from 'src/infrastructure/config/logger/logger.service';
import { UseCaseProxy } from 'src/infrastructure/usecases-proxy/usecases-proxy';
import { UseCasesProxyModule } from 'src/infrastructure/usecases-proxy/usecases-proxy.module';
import { ResponsePresenter } from './presenter/proofsCertificateRegister.presenter';
import { ProofsCertificateRegisterDto } from './dto/proofsCertificateRegister.dto';
import { ApiResponseType } from 'src/infrastructure/common/swagger/response.decorator';

@Controller()
@ApiTags('Constancias')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(ResponsePresenter)
export class ConstanciasController {                 
  constructor(
    @Inject(UseCasesProxyModule.CERTIFICATES_CERTIFICATE_REGISTER)
    private readonly certificatesCertificateRegister: UseCaseProxy<CertificatesCertificateRegisterUseCases>,
    private readonly loggerService: LoggerService
  ) {}

@Post('tramites/constanciasCertificados/registro')
@ApiResponseType(ResponsePresenter, true)
async proofsCertificates(
  @Query() proofsCertificateRegisterDto: ProofsCertificateRegisterDto,
  @Res() res: any,
  @Req() req: any
) {
  const useCase = this.certificatesCertificateRegister.getInstance();
  const certificateRegister = await useCase.execute({
    codigoTramite: proofsCertificateRegisterDto.CodigoTramite,
    cod_utp: proofsCertificateRegisterDto.Cod_utp,
    emplid: proofsCertificateRegisterDto.Emplid,
    periodo: proofsCertificateRegisterDto.Periodo,
    periodoDescrip: proofsCertificateRegisterDto.PeriodoDescrip,
    carrera: proofsCertificateRegisterDto.Carrera,
    ponderado: proofsCertificateRegisterDto.Ponderado,
    tieneDeuda: proofsCertificateRegisterDto.TieneDeuda,
    campusPS: proofsCertificateRegisterDto.CampusPS,
    sistema: proofsCertificateRegisterDto.Sistema
  });
  this.loggerService.Response(req, res, certificateRegister);
  return certificateRegister;
}

}