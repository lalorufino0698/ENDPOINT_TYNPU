import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("CONSTANCIAS_CERTIFICADOS")
export class ConstanciasCertificados {
  @PrimaryGeneratedColumn({ name: "id_cons" })
  id_cons: number;

  @Column({ type: "varchar", length: 20, nullable: true })
  emplid: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  costo: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  periodo: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  item: string;

  @Column({ type: "timestamp" })
  fechaRegistro: Date;

  @Column({ type: "timestamp", nullable: true })
  fechaModificacion: Date | null;

  @Column({ type: "varchar", length: 500, nullable: true })
  documento: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  Sistema: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  CodigoCasoCRM: string;
  
 //faltan dos fk 
}
