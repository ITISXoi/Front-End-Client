import { UseQueryOptions, useInfiniteQuery, useQuery } from "react-query";

import { IImageLayer } from "../collection/types";
import {
  generateNFT,
  getDraftNFTDetail,
  getImage,
  getListAllDraftNft,
  getListAllNft,
  getListCustomized,
  getListMyNft,
  getListNFT,
  getNFTDetail,
} from "./request";
import {
  ICustomizedNFTParams,
  IListDraftNFT,
  IListNFT,
  IListNFTParams,
  IMyNFTParams,
  INFT,
  INFTDetailParams,
  INFTDraft,
} from "./types";

export const useListNFT = (
  params: IListNFTParams,
  option?: UseQueryOptions<IListNFT, Error>
) => {
  return useQuery<IListNFT, Error>(
    ["/collection/nft", params],
    () => getListNFT(params),
    option
  );
};
export const useListAllNFT = (
  params: IListNFTParams,
  option?: UseQueryOptions<IListNFT, Error>
) => {
  return useQuery<IListNFT, Error>(
    ["/nft/list-all-nft", params],
    () => getListAllNft(params),
    option
  );
};
export const useListAllDraftNFT = (
  params: IListNFTParams,
  option?: UseQueryOptions<IListDraftNFT, Error>
) => {
  return useQuery<IListDraftNFT, Error>(
    ["/nft/list-all-draft-nft", params],
    () => getListAllDraftNft(params),
    option
  );
};
export const useDetailNFT = (
  params: string,
  option?: UseQueryOptions<INFT, Error>
) => {
  return useQuery<INFT, Error>(
    ["/nft/detail", params],
    () => getNFTDetail(params),
    option
  );
};
export const useDetailDraftNFT = (
  params: string,
  option?: UseQueryOptions<INFTDraft, Error>
) => {
  return useQuery<INFTDraft, Error>(
    ["/nft/offchain/detail", params],
    () => getDraftNFTDetail(params),
    option
  );
};
export const useListMyNFT = (
  params: IMyNFTParams,
  option?: UseQueryOptions<IListNFT, Error>
) => {
  return useQuery<IListNFT, Error>(
    ["/nft/list-my-nft", params],
    () => getListMyNft(params),
    option
  );
};

export const useListCustomized = (
  params: ICustomizedNFTParams,
  option?: UseQueryOptions<IListNFT, Error>
) => {
  return useQuery<IListNFT, Error>(
    ["nft/list-nft-offchain", params],
    () => getListCustomized(params),
    option
  );
};

export const useFetchMoreListCustomized = (
  params: ICustomizedNFTParams,
  option?: any
) => {
  return useInfiniteQuery<any>(
    ["nft/list-nft-offchain", params],
    async ({ pageParam = 1 }) => {
      console.log("pageParam", pageParam);
      const data = await getListCustomized({
        page: pageParam,
        limit: params.limit,
      });
      return data;
    },
    {
      getNextPageParam: (lastPage) => {
        const { totalPages, currentPage } = lastPage.meta.pagination;
        if (currentPage === totalPages) {
          return;
        } else {
          return currentPage + 1;
        }
      },
    }
  );
};

export const useGetImage = (
  url: string,
  option?: UseQueryOptions<any, Error>
) => {
  return useQuery<any, Error>(
    ["/nft/list-my-nf121212t", url],
    () => getImage(url),
    option
  );
};

export const useGenerateNFT = (
  params: number,
  option?: UseQueryOptions<IImageLayer[], Error>
) => {
  return useQuery<IImageLayer[], Error>(
    ["/nft/generate", params],
    () => generateNFT(params),
    option
  );
};
