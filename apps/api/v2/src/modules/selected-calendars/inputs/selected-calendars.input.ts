import { IsInt, IsOptional, IsString } from "class-validator";

export class SelectedCalendarsInputDto {
  @IsString()
  readonly integration!: string;

  @IsString()
  readonly externalId!: string;

  @IsInt()
  readonly credentialId!: number;

  @IsString()
  @IsOptional()
  readonly domainWideDelegationCredentialId?: string;
}

export class SelectedCalendarsQueryParamsInputDto {
  @IsString()
  readonly integration!: string;

  @IsString()
  readonly externalId!: string;

  @IsString()
  readonly credentialId!: string;

  @IsString()
  @IsOptional()
  readonly domainWideDelegationCredentialId?: string;
}
