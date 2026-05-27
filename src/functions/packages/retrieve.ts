import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function retrievePackages() {
  return await sendRequest<RetrievePackagesResponse>(
    HttpRequestMethods.GET,
    ["packages"],
    {
      passToken: true,
    },
  );
}

export async function retrievePackage(packageId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["packages", String(packageId)],
    {
      passToken: true,
    },
  );
}

export type RetrievePackagesResponse = {
  data: {
    id: number;
    name: string;
    description: string | null;
    enabled: boolean;
    memory: number;
    primaryStorage: number;
    traffic: number;
    cpuCores: number;
    primaryNetworkSpeedIn: number;
    primaryNetworkSpeedOut: number;
    primaryDiskType: string;
    backupPlanId: null;
    primaryStorageReadBytesSec: number | null;
    primaryStorageWriteBytesSec: number | null;
    primaryStorageReadIopsSec: number | null;
    primaryStorageWriteIopsSec: number | null;
    primaryStorageProfile: number;
    primaryNetworkProfile: number;
    created: string;
  }[];
};
