import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function serverPower(serverId: number, action: ServerPowerAction) {
  return await sendRequest<any>(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "power", action],
    {
      passToken: true,
    },
  );
}

export type ServerPowerAction = "boot" | "shutdown" | "restart" | "poweroff";
