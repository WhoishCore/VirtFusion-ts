import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function retrieveDnsService(serviceId: string) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["dns", "services", serviceId],
    {
      passToken: true,
    },
  );
}
