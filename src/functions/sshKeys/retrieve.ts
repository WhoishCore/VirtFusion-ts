import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function retrieveSshKey(sshKeyId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["ssh_keys", String(sshKeyId)],
    {
      passToken: true,
    },
  );
}
