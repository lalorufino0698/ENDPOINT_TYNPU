import { HttpStatus } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { ProofsCertificateM } from "src/domain/entities/proofsCertificate";
import { proofsCertificateRepository } from "src/domain/repositories/proofsCertificate.repository";
import { LoggerService } from "src/infrastructure/config/logger/logger.service";

export class CertificatesCertificateRegisterUseCases {
    constructor(
        private readonly proofsCertificateRepository: proofsCertificateRepository,
        private readonly logger: LoggerService
    ) {}

    async execute(
        ProofsCertificateM : ProofsCertificateM
      ) {
        try {
          this.logger.log('FindStudentInformationUseCases', 'finding student information');
          const procedure = await this.proofsCertificateRepository.certificateRegister(
            ProofsCertificateM
          );
    
          
          return procedure;


        } catch (error) {
          if (error.status) {
            throw new RpcException({
              status: error.status,
              message: error.message,
            });
          } else {
            throw new RpcException({
              status: HttpStatus.BAD_REQUEST,
              message: error.message,
            });
          }
        }
      }



}