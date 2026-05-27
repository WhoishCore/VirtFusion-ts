import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function updateServerBackupPlan(serverId: number, planId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["servers", String(serverId), "backups", "plan", String(planId)],
    { passToken: true },
  );
}

export async function changeServerPackage(serverId: number, packageId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["servers", String(serverId), "package", String(packageId)],
    { passToken: true },
  );
}

export async function modifyServerName(serverId: number, name: string) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["servers", String(serverId), "modify", "name"],
    {
      passToken: true,
      body: { name },
    },
  );
}

export async function retrieveServersByUser(userId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["servers", "user", String(userId)],
    { passToken: true },
  );
}

export async function retrieveServerTemplates(serverId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["servers", String(serverId), "templates"],
    { passToken: true },
  );
}

export async function suspendServer(serverId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "suspend"],
    { passToken: true },
  );
}

export async function unsuspendServer(serverId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "unsuspend"],
    { passToken: true },
  );
}

export async function throttleServerCpu(
  serverId: number,
  throttleOptions: ThrottleCpuOptions,
) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["servers", String(serverId), "modify", "cpuThrottle"],
    {
      passToken: true,
      body: throttleOptions,
    },
  );
}

export async function createServerVnc(
  serverId: number,
  vncOptions: VncOptions,
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "vnc"],
    {
      passToken: true,
      body: vncOptions,
    },
  );
}

export async function retrieveServerVnc(serverId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["servers", String(serverId), "vnc"],
    { passToken: true },
  );
}

export async function changeServerOwner(serverId: number, newOwnerId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["servers", String(serverId), "owner", String(newOwnerId)],
    { passToken: true },
  );
}

export async function modifyServerMemory(serverId: number, memory: number) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["servers", String(serverId), "modify", "memory"],
    {
      passToken: true,
      body: { memory },
    },
  );
}

export async function modifyServerCpuCores(serverId: number, cpuCores: number) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["servers", String(serverId), "modify", "cpuCores"],
    {
      passToken: true,
      body: { cores: cpuCores },
    },
  );
}

export async function updateServerCustomXml(
  serverId: number,
  customXmlOptions: CustomXmlOptions,
) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "customXML"],
    {
      passToken: true,
      body: customXmlOptions,
    },
  );
}

export async function modifyServerBackupManagerAccess(
  serverId: number,
  backupManagerAccessOptions: BackupManagerAccessOptions,
) {
  return await sendRequest<any>(
    HttpRequestMethods.PUT,
    ["servers", String(serverId), "backupManager", "access"],
    {
      passToken: true,
      body: backupManagerAccessOptions,
    },
  );
}

export type ThrottleCpuOptions = {
  percent: number;
};

export type VncOptions = {
  action: "enable" | "disable";
};

export type CustomXmlOptions = {
  domain?: string;
  os?: string;
  devices?: string;
  features?: string;
  clock?: string;
  cpuTune?: string;
  domainEnabled?: boolean;
  osEnabled?: boolean;
  devicesEnabled?: boolean;
  featuresEnabled?: boolean;
  clockEnabled?: boolean;
  cpuTuneEnabled?: boolean;
};

export type BackupManagerAccessOptions = {
  type:
    | "inherit"
    | "disabled"
    | "scheduled"
    | "view_restore"
    | "full"
    | "manual";
};
