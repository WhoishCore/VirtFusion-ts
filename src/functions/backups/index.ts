import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function retrieveServerBackups(serverId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["backups", "server", String(serverId)],
    {
      passToken: true,
    },
  );
}
