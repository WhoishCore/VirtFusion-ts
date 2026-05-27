import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function retrieveQueueItem(queueId: number) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["queue", String(queueId)],
    {
      passToken: true,
    },
  );
}
