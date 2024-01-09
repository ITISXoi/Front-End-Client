import { useEffect, useState } from "react";

import { Contract } from "@ethersproject/contracts";

import { useContractNoSigner } from "./useContract";

export function useGetNextToken(
  id: string,
  token: string,
  ABI: any,
  chainId: number
) {
  const [value, setValue] = useState<string | undefined>(undefined);
  const contract = useContractNoSigner<Contract>(token, ABI, chainId);
  useEffect(() => {
    (async () => {
      if (id) {
        try {
          const balance = await contract.getNextTokenId(id);
          setValue(balance);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [token, id]);
  return value;
}
