import { ProofsCertificateM } from "../entities/proofsCertificate";

export interface proofsCertificateRepository{
    certificateRegister(proofsCertificate: ProofsCertificateM): Promise<ProofsCertificateM>;
}
