import { CertificatesCertificateRegisterParameterDto } from "src/application/use-cases/certificatesCertificateRegister/dto/certificatesCertificateRegisterParameter.dto";
import { ProofsCertificateM } from "../entities/proofsCertificate";

export interface ProofsCertificateRepository{
    certificateRegister(proofsCertificate: CertificatesCertificateRegisterParameterDto): Promise<ProofsCertificateM>;
}
