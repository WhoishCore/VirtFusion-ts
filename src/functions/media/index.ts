import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function retrieveIso(isoId: string) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["media", "iso", isoId],
    {
      passToken: true,
    },
  );
}

export async function retrieveTemplatesFromServerPackageSpec(
  serverPackageId: number,
) {
  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["media", "templates", "fromServerPackageSpec", String(serverPackageId)],
    {
      passToken: true,
    },
  );
}
