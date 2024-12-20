
import { InjectRepository } from '@nestjs/typeorm';
import { ProofsCertificateRepository } from 'src/domain/repositories/proofsCertificate.repository';
import { Repository } from 'typeorm';
import { ConstanciasCertificados } from '../entities/constanciasCertificados.entity';
import { EstadoApi } from '../entities/estadoApi.entity';

export class DataBaseConstanciasRepository implements ProofsCertificateRepository {
  constructor(
    @InjectRepository(ConstanciasCertificados)
    private readonly constanciasCertificadosRepository: Repository<ConstanciasCertificados>,
    @InjectRepository(EstadoApi)
    private readonly estadoApiRepository: Repository<EstadoApi>,
 ) {}


}
