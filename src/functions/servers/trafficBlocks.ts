import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function addServerTrafficBlock(
  serverId: number,
  trafficBlockOptions: TrafficBlockOptions,
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "traffic", "blocks"],
    {
      passToken: true,
      body: trafficBlockOptions,
    },
  );
}

export async function retrieveServerTrafficBlocks(serverId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["servers", String(serverId), "traffic", "blocks"],
    {
      passToken: true,
    },
  );
}

export async function deleteServerTrafficBlock(
  serverId: number,
  blockId: number,
  trafficBlockOptions: TrafficBlockOptions,
) {
  return await sendRequest<any>(
    HttpRequestMethods.DELETE,
    ["servers", String(serverId), "traffic", "blocks", String(blockId)],
    {
      passToken: true,
      body: trafficBlockOptions,
    },
  );
}

export async function modifyServerTraffic(
  serverId: number,
  trafficOptions: ModifyTrafficOptions,
) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["servers", String(serverId), "modify", "traffic"],
    {
      passToken: true,
      body: trafficOptions,
    },
  );
}

export type TrafficBlockOptions = {
  month: number;
  amount: number;
};

export type ModifyTrafficOptions = {
  traffic: number;
};
