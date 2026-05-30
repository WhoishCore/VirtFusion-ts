import lodash from "lodash";

import { CustomError } from "modules/customError";
import { HttpRequestMethods, sendRequest } from "../sendRequest";

const { isInteger } = lodash;

export async function listServer(
  options: ListOptions = {
    responseType: "simple",
    page: 1,
    limit: 20,
  },
) {
  const {
    responseType = "simple",
    page = 1,
    limit = 20,
    hypervisorId,
  } = options;

  if (!isInteger(page) || page < 1) {
    throw new CustomError({
      errorMessage: "Page must be an integer, range: 1 ~ Infinity",
      errorObject: { page },
    });
  }

  if (!isInteger(limit) || limit < 1 || limit > 200) {
    throw new CustomError({
      errorMessage: "Results must be an integer, range: 1 ~ 200",
      errorObject: { limit },
    });
  }

  if (hypervisorId !== undefined && !isInteger(hypervisorId)) {
    throw new CustomError({
      errorMessage: "Hypervisor ID must be an integer",
      errorObject: { hypervisorId },
    });
  }

  const query = {
    type: responseType,
    page,
    results: limit,
    ...(hypervisorId === undefined ? {} : { hypervisorId }),
  };

  return await sendRequest<any>(HttpRequestMethods.GET, ["servers"], {
    passToken: true,
    query,
  });
}

export type ListOptions = {
  responseType?: "full" | "simple";
  page?: number;
  limit?: number;
  hypervisorId?: number;
};
