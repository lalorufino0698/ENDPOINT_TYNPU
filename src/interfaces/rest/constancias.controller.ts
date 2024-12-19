import { Controller, Inject } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponsePresenter } from './presenter/proofsCertificateRegister.presenter';

@Controller()
@ApiTags('Constancias')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(ResponsePresenter)
export class ConstanciasController {                 
  constructor() {}
}
                               