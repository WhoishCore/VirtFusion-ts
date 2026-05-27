import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function addServerNetworkWhitelist(
  serverId: number,
  whitelistOptions: NetworkWhitelistOptions,
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "networkWhitelist"],
    {
      passToken: true,
      body: whitelistOptions,
    },
  );
}

export async function deleteServerNetworkWhitelist(
  serverId: number,
  whitelistOptions: DeleteNetworkWhitelistOptions,
) {
  return await sendRequest<any>(
    HttpRequestMethods.DELETE,
    ["servers", String(serverId), "networkWhitelist"],
    {
      passToken: true,
      body: whitelistOptions,
    },
  );
}

export async function addServerIpv4Quantity(
  serverId: number,
  ipv4QuantityOptions: AddIpv4QuantityOptions,
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "ipv4Qty"],
    {
      passToken: true,
      body: ipv4QuantityOptions,
    },
  );
}

export async function addServerIpv4(
  serverId: number,
  ipv4Options: Ipv4Options,
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "ipv4"],
    {
      passToken: true,
      body: ipv4Options,
    },
  );
}

export async function deleteServerIpv4(
  serverId: number,
  ipv4Options: Ipv4Options,
) {
  return await sendRequest<any>(
    HttpRequestMethods.DELETE,
    ["servers", String(serverId), "ipv4"],
    {
      passToken: true,
      body: ipv4Options,
    },
  );
}

export type NetworkWhitelistOptions = {
  interface: string;
  ip: string;
  cidr?: number;
};

export type DeleteNetworkWhitelistOptions = Omit<
  NetworkWhitelistOptions,
  "cidr"
>;

export type AddIpv4QuantityOptions = {
  interface: string;
  quantity: number;
};

export type Ipv4Options = {
  ip: string[];
};
