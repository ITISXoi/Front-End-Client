import { useContract } from "./useContract";
import ABIJSON from "@/contracts/ABI.json";
import type { ABI } from "@/contracts/types";

export function useNFTContract(address: string) {
  return useContract<ABI>(address, ABIJSON);
}
