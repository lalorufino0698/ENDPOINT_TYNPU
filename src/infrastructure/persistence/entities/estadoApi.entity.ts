import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("ESTADOAPI")
export class EstadoApi {
  @PrimaryGeneratedColumn({ name: "Codigo" })
  Codigo: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  Descripcion: string;

  @Column({ type: "boolean", nullable: true })
  Estado: boolean | null;
  
  //faltan dos fk 
}
