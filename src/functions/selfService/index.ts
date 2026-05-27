import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function cancelUserCredit(creditId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.DELETE,
    ["selfService", "credit", String(creditId)],
    {
      passToken: true,
    },
  );
}

export async function deleteResourcePackServers(
  packId: number,
  options: DeleteResourcePackServersOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.DELETE,
    ["selfService", "resourcePackServers", String(packId)],
    {
      passToken: true,
      query: options,
    },
  );
}

export async function deleteUserResourcePack(
  packId: number,
  options: DeleteUserResourcePackOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.DELETE,
    ["selfService", "resourcePack", String(packId)],
    {
      passToken: true,
      query: options,
    },
  );
}

export async function getUserResourcePack(
  packId: number,
  options: GetUserResourcePackOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["selfService", "resourcePack", String(packId)],
    {
      passToken: true,
      query: options,
    },
  );
}

export async function modifyUserResourcePack(
  packId: number,
  modifyOptions: ModifyUserResourcePackOptions,
) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["selfService", "resourcePack", String(packId)],
    {
      passToken: true,
      body: modifyOptions,
    },
  );
}

export async function retrieveCurrencies() {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["selfService", "currencies"],
    {
      passToken: true,
    },
  );
}

export async function suspendResourcePackServers(packId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["selfService", "resourcePackServers", String(packId), "suspend"],
    {
      passToken: true,
    },
  );
}

export async function unsuspendResourcePackServers(packId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["selfService", "resourcePackServers", String(packId), "unsuspend"],
    {
      passToken: true,
    },
  );
}

export async function addUserCredit(
  extRelationId: string,
  addCreditOptions: AddUserCreditOptions,
  options: SelfServiceExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["selfService", "credit", "byUserExtRelationId", extRelationId],
    {
      passToken: true,
      query: extRelationQuery(options),
      body: addCreditOptions,
    },
  );
}

export async function addUserHourlyGroupProfile(
  extRelationId: string,
  profileOptions: SelfServiceProfileOptions,
  options: SelfServiceExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["selfService", "hourlyGroupProfile", "byUserExtRelationId", extRelationId],
    {
      passToken: true,
      query: extRelationQuery(options),
      body: profileOptions,
    },
  );
}

export async function addUserResourceGroupProfile(
  extRelationId: string,
  profileOptions: SelfServiceProfileOptions,
  options: SelfServiceExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    [
      "selfService",
      "resourceGroupProfile",
      "byUserExtRelationId",
      extRelationId,
    ],
    {
      passToken: true,
      query: extRelationQuery(options),
      body: profileOptions,
    },
  );
}

export async function addUserResourcePack(
  extRelationId: string,
  resourcePackOptions: AddUserResourcePackOptions,
  options: SelfServiceExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["selfService", "resourcePack", "byUserExtRelationId", extRelationId],
    {
      passToken: true,
      query: extRelationQuery(options),
      body: resourcePackOptions,
    },
  );
}

export async function retrieveHourlyStatsByUserExtRelationId(
  extRelationId: string,
  options: SelfServiceStatsOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["selfService", "hourlyStats", "byUserExtRelationId", extRelationId],
    {
      passToken: true,
      query: statsQuery(options),
    },
  );
}

export async function modifyUserAccess(
  extRelationId: string,
  accessOptions: ModifyUserAccessOptions,
  options: SelfServiceExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["selfService", "access", "byUserExtRelationId", extRelationId],
    {
      passToken: true,
      query: extRelationQuery(options),
      body: accessOptions,
    },
  );
}

export async function removeUserHourlyGroupProfile(
  profileId: number,
  extRelationId: string,
  options: SelfServiceExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.DELETE,
    [
      "selfService",
      "hourlyGroupProfile",
      String(profileId),
      "byUserExtRelationId",
      extRelationId,
    ],
    {
      passToken: true,
      query: extRelationQuery(options),
    },
  );
}

export async function removeUserResourceGroupProfile(
  profileId: number,
  extRelationId: string,
  options: SelfServiceExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.DELETE,
    [
      "selfService",
      "resourceGroupProfile",
      String(profileId),
      "byUserExtRelationId",
      extRelationId,
    ],
    {
      passToken: true,
      query: extRelationQuery(options),
    },
  );
}

export async function retrieveReportByUserExtRelationId(
  extRelationId: string,
  options: SelfServiceReportOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["selfService", "report", "byUserExtRelationId", extRelationId],
    {
      passToken: true,
      query: extRelationQuery(options),
    },
  );
}

export async function setUserHourlyResourcePack(
  extRelationId: string,
  resourcePackOptions: SetUserHourlyResourcePackOptions,
  options: SelfServiceExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["selfService", "hourlyResourcePack", "byUserExtRelationId", extRelationId],
    {
      passToken: true,
      query: extRelationQuery(options),
      body: resourcePackOptions,
    },
  );
}

export async function retrieveUsageByUserExtRelationId(
  extRelationId: string,
  options: SelfServiceStatsOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["selfService", "usage", "byUserExtRelationId", extRelationId],
    {
      passToken: true,
      query: statsQuery(options),
    },
  );
}

function extRelationQuery(options: SelfServiceExtRelationOptions) {
  return {
    ...options,
    relStr: options.relStr ?? false,
  };
}

function statsQuery(options: SelfServiceStatsOptions) {
  const { period, ...rest } = options;
  return {
    ...extRelationQuery(rest),
    "period[]": period,
  };
}

export type DeleteResourcePackServersOptions = {
  delay?: number;
};

export type DeleteUserResourcePackOptions = {
  disable?: boolean;
};

export type GetUserResourcePackOptions = {
  withServers?: boolean;
};

export type ModifyUserResourcePackOptions = {
  enabled: boolean;
};

export type SelfServiceExtRelationOptions = {
  relStr?: boolean;
};

export type AddUserCreditOptions = {
  tokens: number;
  reference_1?: number;
  reference_2?: string;
};

export type SelfServiceProfileOptions = {
  profileId: number;
};

export type AddUserResourcePackOptions = {
  packId: number;
  enabled: boolean;
};

export type SelfServiceStatsOptions = SelfServiceExtRelationOptions & {
  period?: string[];
  range?: string;
};

export type ModifyUserAccessOptions = {
  syncToProfiles: boolean;
};

export type SelfServiceReportOptions = SelfServiceExtRelationOptions & {
  period?: string;
  currency?: string;
};

export type SetUserHourlyResourcePackOptions = {
  packId: number;
};
