import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function listHypervisors(options: HypervisorListOptions = {}) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["compute", "hypervisors"],
    {
      passToken: true,
      query: options,
    },
  );
}

export async function retrieveHypervisor(hypervisorId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["compute", "hypervisors", String(hypervisorId)],
    {
      passToken: true,
    },
  );
}

export async function listHypervisorGroups(
  options: HypervisorListOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["compute", "hypervisors", "groups"],
    {
      passToken: true,
      query: options,
    },
  );
}

export async function retrieveHypervisorGroup(hypervisorGroupId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["compute", "hypervisors", "groups", String(hypervisorGroupId)],
    {
      passToken: true,
    },
  );
}

export async function retrieveHypervisorGroupResources(
  hypervisorGroupId: number,
  options: HypervisorListOptions = {},
) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    [
      "compute",
      "hypervisors",
      "groups",
      String(hypervisorGroupId),
      "resources",
    ],
    {
      passToken: true,
      query: options,
    },
  );
}

export type HypervisorListOptions = {
  results?: number;
  page?: number;
};
