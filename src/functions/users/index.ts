import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function createUser(createOptions: CreateUserOptions) {
  return await sendRequest<any>(HttpRequestMethods.POST, ["users"], {
    passToken: true,
    body: createOptions,
  });
}

export async function retrieveUserByExtRelationId(
  extRelationId: string,
  options: UserExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["users", extRelationId, "byExtRelation"],
    {
      passToken: true,
      query: { relStr: options.relStr ?? false },
    },
  );
}

export async function modifyUserByExtRelationId(
  extRelationId: string,
  modifyOptions: ModifyUserOptions,
  options: UserExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["users", extRelationId, "byExtRelation"],
    {
      passToken: true,
      query: { relStr: options.relStr ?? false },
      body: modifyOptions,
    },
  );
}

export async function deleteUserByExtRelationId(
  extRelationId: string,
  options: UserExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.DELETE,
    ["users", extRelationId, "byExtRelation"],
    {
      passToken: true,
      query: { relStr: options.relStr ?? false },
    },
  );
}

export async function resetUserPasswordByExtRelationId(
  extRelationId: string,
  options: UserExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["users", extRelationId, "byExtRelation", "resetPassword"],
    {
      passToken: true,
      query: { relStr: options.relStr ?? false },
    },
  );
}

export async function generateUserLoginTokensByExtRelationId(
  extRelationId: string,
  options: UserExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["users", extRelationId, "authenticationTokens"],
    {
      passToken: true,
      query: { relStr: options.relStr ?? false },
    },
  );
}

export async function generateUserLoginTokensByServerId(
  extRelationId: string,
  serverId: number,
  options: UserExtRelationOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["users", extRelationId, "serverAuthenticationTokens", String(serverId)],
    {
      passToken: true,
      query: { relStr: options.relStr ?? false },
    },
  );
}

export type CreateUserOptions = {
  name: string;
  email: string;
  extRelationId?: number;
  relStr?: string;
  selfService?: number;
  selfServiceHourlyCredit?: boolean;
  selfServiceHourlyGroupProfiles?: number[];
  selfServiceHourlyResourcePack?: number;
  selfServiceResourceGroupProfiles?: number[];
  sendMail?: boolean;
};

export type ModifyUserOptions = Partial<CreateUserOptions>;

export type UserExtRelationOptions = {
  relStr?: boolean;
};
