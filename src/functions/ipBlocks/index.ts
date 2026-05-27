import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function addIpBlockIpv4(
  blockId: number,
  addIpv4Options: AddIpBlockIpv4Options,
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["connectivity", "ipblocks", String(blockId), "ipv4"],
    {
      passToken: true,
      body: addIpv4Options,
    },
  );
}

export async function listIpBlocks(options: IpBlockListOptions = {}) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["connectivity", "ipblocks"],
    {
      passToken: true,
      query: options,
    },
  );
}

export async function retrieveIpBlock(blockId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["connectivity", "ipblocks", String(blockId)],
    {
      passToken: true,
    },
  );
}

export type AddIpBlockIpv4Options = {
  type: "range";
  start: string;
  end: string;
};

export type IpBlockListOptions = {
  results?: number;
  page?: number;
};
