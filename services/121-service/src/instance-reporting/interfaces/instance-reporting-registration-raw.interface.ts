import { Fsps } from '@121-service/src/fsp-integrations/shared/enum/fsp-name.enum';
import { InstanceReportingProgramRaw } from '@121-service/src/instance-reporting/interfaces/instance-reporting-program-raw.interface';
import { DuplicateStatus } from '@121-service/src/registration/enum/duplicate-status.enum';
import { RegistrationStatusEnum } from '@121-service/src/registration/enum/registration-status.enum';
import { RegistrationPreferredLanguage } from '@121-service/src/shared/enum/registration-preferred-language.enum';

export interface InstanceReportingRegistrationRaw {
  id: number;
  referenceId: string;
  status: RegistrationStatusEnum | null;
  created: Date;
  preferredLanguage: RegistrationPreferredLanguage | null;
  fspName: Fsps | null;
  paymentAmountMultiplier: number;
  maxPayments: number | null;
  duplicateStatus: DuplicateStatus;
  program: InstanceReportingProgramRaw;
}
