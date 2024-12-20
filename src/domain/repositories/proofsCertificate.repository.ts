import { ProofsCertificateM } from "../entities/proofsCertificate";

export interface ProofsCertificateRepository{
    certificateRegister(proofsCertificate: ProofsCertificateM): Promise<ProofsCertificateM>;
}
