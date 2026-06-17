import { ApiProperty } from '@nestjs/swagger';

export class InstanceReportingRegistrationDto {
  @ApiProperty({ example: 'ethiopia' })
  readonly instance: string;

  @ApiProperty({ example: '1.0.0' })
  readonly version: string;

  @ApiProperty({ example: 'Cash for Work' })
  readonly programTitle: string;

  @ApiProperty({ example: 1 })
  readonly programId: number;

  @ApiProperty({ example: 'included', nullable: true })
  readonly status: string | null;

  @ApiProperty({ example: 'abc-123' })
  readonly referenceId: string;

  @ApiProperty({ example: '2026-03-30T12:00:00.000Z' })
  readonly createdDate: string;

  @ApiProperty({ example: 'en', nullable: true })
  readonly preferredLanguage: string | null;

  @ApiProperty({ example: 'Safaricom', nullable: true })
  readonly fspName: string | null;

  @ApiProperty({ example: 1 })
  readonly paymentAmountMultiplier: number;

  @ApiProperty({ example: 3, nullable: true })
  readonly maxPayments: number | null;

  @ApiProperty({ example: 'unique' })
  readonly duplicateStatus: string;

  @ApiProperty({ example: '2026-03-30' })
  readonly uploadDate: string;
}
