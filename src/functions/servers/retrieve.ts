import lodash from "lodash";

import { CustomError } from "modules/customError";
import { HttpRequestMethods, sendRequest } from "../sendRequest";

const { isInteger } = lodash;

export async function retrieveServer(serverId: number) {
  if (!isInteger(serverId)) {
    throw new CustomError({
      errorMessage: "Server ID must be an integer",
      errorObject: { serverId },
    });
  }

  return await sendRequest<any>(
    HttpRequestMethods.GET,
    ["servers", String(serverId)],
    {
      passToken: true,
    },
  );
}
