import { UseQueryOptions, useQuery } from "react-query";

import { userInfo } from "./request";
import { IUserInfo } from "./types";

export const useUserInfo = (option?: UseQueryOptions<IUserInfo, Error>) => {
  return useQuery<IUserInfo, Error>(["/profile"], () => userInfo(), option);
};
