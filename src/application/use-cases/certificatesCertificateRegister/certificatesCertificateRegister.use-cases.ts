import { HttpStatus } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { ProofsCertificateM } from "src/domain/entities/proofsCertificate";
import { ProofsCertificateRepository } from "src/domain/repositories/proofsCertificate.repository";
import { LoggerService } from "src/infrastructure/config/logger/logger.service";
import { CertificatesCertificateRegisterParameterDto } from "./dto/certificatesCertificateRegisterParameter.dto";

export class CertificatesCertificateRegisterUseCases {
  
  constructor(
    private readonly proofsCertificateRepository: ProofsCertificateRepository,
  ) {
   
  }

  //falta implementar
  async execute(certificatesCertificateRegisterParameter: CertificatesCertificateRegisterParameterDto) {
    const procedure = await this.proofsCertificateRepository.certificateRegister(certificatesCertificateRegisterParameter);
    return procedure;
  }
  
  
}