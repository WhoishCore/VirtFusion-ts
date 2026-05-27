import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function disableServerFirewall(
  serverId: number,
  networkInterface: string,
  options: FirewallSyncOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "firewall", networkInterface, "disable"],
    {
      passToken: true,
      query: options,
    },
  );
}

export async function enableServerFirewall(
  serverId: number,
  networkInterface: string,
  options: FirewallSyncOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "firewall", networkInterface, "enable"],
    {
      passToken: true,
      query: options,
    },
  );
}

export async function retrieveServerFirewall(
  serverId: number,
  networkInterface: string,
  options: FirewallSyncOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["servers", String(serverId), "firewall", networkInterface],
    {
      passToken: true,
      query: options,
    },
  );
}

export async function applyServerFirewallRules(
  serverId: number,
  networkInterface: string,
  firewallRulesOptions: FirewallRulesOptions,
  options: FirewallSyncOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "firewall", networkInterface, "rules"],
    {
      passToken: true,
      query: options,
      body: firewallRulesOptions,
    },
  );
}

export type FirewallSyncOptions = {
  sync?: boolean;
};

export type FirewallRulesOptions = {
  rulesets: number[];
};
