import lodash from "lodash";

import { CustomError } from "modules/customError";
import { HttpRequestMethods, sendRequest } from "../sendRequest";

const { isInteger } = lodash;

export async function deleteSshKey(sshKeyId: number) {
  if (!isInteger(sshKeyId)) {
    throw new CustomError({
      errorMessage: "Ssh key ID must be an integer",
      errorObject: { sshKeyId },
    });
  }

  return await sendRequest<DeleteSshKeyResponse>(
    HttpRequestMethods.DELETE,
    ["ssh_keys", String(sshKeyId)],
    {
      passToken: true,
    },
  );
}

export type DeleteSshKeyResponse = undefined;
