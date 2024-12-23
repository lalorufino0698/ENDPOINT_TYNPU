import { InjectRepository } from '@nestjs/typeorm';
import { ProofsCertificateRepository } from 'src/domain/repositories/proofsCertificate.repository';
import { Repository } from 'typeorm';
import { ConstanciasCertificados } from '../entities/constanciasCertificados.entity';
import { EstadoApi } from '../entities/estadoApi.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ProofsCertificateM } from 'src/domain/entities/proofsCertificate';
import { CertificatesCertificateRegisterParameterDto } from 'src/application/use-cases/certificatesCertificateRegister/dto/certificatesCertificateRegisterParameter.dto';

export class DataBaseConstanciasRepository implements ProofsCertificateRepository {
  constructor(
    @InjectRepository(ConstanciasCertificados)
    private readonly constanciasCertificadosRepository: Repository<ConstanciasCertificados>,
    @InjectRepository(EstadoApi)
    private readonly estadoApiRepository: Repository<EstadoApi>,
  ) {}

  async certificateRegister(
    proofsCertificate: CertificatesCertificateRegisterParameterDto,
  ): Promise<ProofsCertificateM> {
    try {
      // Lógica para procesar el objeto `proofsCertificate`
      const proofsCertificateM = new ProofsCertificateM();

      // Ejemplo de uso del repositorio
      console.log('Registro de certificado:', proofsCertificate);

      return proofsCertificateM;
    } catch (error) {
      throw new HttpException(
        'Error al registrar el certificado',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
