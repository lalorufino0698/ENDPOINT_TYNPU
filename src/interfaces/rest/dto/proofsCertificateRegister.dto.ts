import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsInt, IsOptional, MinLength } from 'class-validator';

export class ProofsCertificateRegisterDto {
  @IsInt()
  @Type(() => Number)
  @ApiProperty({ example: 1019, description: 'Código del trámite' })
  CodigoTramite: number;

  @IsString()
  @MinLength(1)
  @ApiProperty({ example: 'U19205151', description: 'Código de UTP' })
  Cod_utp: string;

  @IsString()
  @MinLength(1)
  @ApiProperty({ example: '00001191030', description: 'Identificación del empleado' })
  Emplid: string;

  @IsString()
  @MinLength(1)
  @ApiProperty({ example: '2203', description: 'Periodo académico' })
  Periodo: string;

  @IsString()
  @MinLength(1)
  @ApiProperty({ example: '2020-Ciclo 2 Agosto', description: 'Descripción del periodo académico' })
  PeriodoDescrip: string;

  @IsString()
  @MinLength(1)
  @ApiProperty({ example: 'ADM. Y MARKETING', description: 'Carrera del estudiante' })
  Carrera: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '', description: 'Promedio ponderado del estudiante', nullable: true })
  Ponderado?: string | null;

  @IsOptional()
  @ApiProperty({ example: null, description: 'Indica si tiene deuda', nullable: true })
  TieneDeuda?: string | null;

  @IsString()
  @MinLength(1)
  @ApiProperty({ example: 'AREQU', description: 'Código del campus en PS' })
  CampusPS: string;

  @IsString()
  @MinLength(1)
  @ApiProperty({ example: '3', description: 'Código del sistema' })
  Sistema: string;
}
