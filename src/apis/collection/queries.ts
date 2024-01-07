import { UseQueryOptions, useInfiniteQuery, useQuery } from "react-query";

import {
  getDetailCollection,
  getListCollection,
  getListImageByLayerId,
  getListImageLayer,
  getListLayer,
  getListLayerByCollectionId,
  getMetadataCollection,
} from "./request";
import {
  ICollection,
  IListCollection,
  IListCollectionParams,
  IListImage,
  IListImageLayer,
  IListImageLayerParams,
  IListLayer,
  IListLayerParams,
  IListLayers,
} from "./types";

export const useListCollection = (
  params: IListCollectionParams,
  option?: UseQueryOptions<IListCollection, Error>
) => {
  return useQuery<IListCollection, Error>(
    ["/collection/list", params],
    () => getListCollection(params),
    option
  );
};

export const useFetchMoreListCollection = (
  params: IListCollectionParams,
  option?: any
) => {
  return useInfiniteQuery<any>(
    ["/collection/list", params],
    async ({ pageParam = 1 }) => {
      const data = await getListCollection({
        page: pageParam,
        limit: params.limit,
      });
      return data;
    },
    {
      getNextPageParam: (lastPage) => {
        const { totalPages, currentPage } = lastPage?.pagination;
        if (currentPage === totalPages) {
          return;
        } else {
          return currentPage + 1;
        }
      },
    }
  );
};

export const useMetadataCollection = () => {
  return useQuery<any>(["/collection/metadata/list-collection"], () =>
    getMetadataCollection()
  );
};

export const useDetailCollection = (
  params: number,
  option?: UseQueryOptions<ICollection, Error>
) => {
  return useQuery<ICollection, Error>(
    ["/collection/item", params],
    () => getDetailCollection(params),
    option
  );
};

export const useListLayer = (
  params: IListLayerParams,
  option?: UseQueryOptions<IListLayer, Error>
) => {
  return useQuery<IListLayer, Error>(
    ["/collection/layer/list", params],
    () => getListLayer(params),
    option
  );
};

export const useListImageLayer = (
  params: IListImageLayerParams,
  option?: UseQueryOptions<IListImageLayer, Error>
) => {
  return useQuery<IListImageLayer, Error>(
    ["/collection/layer/image/list", params],
    () => getListImageLayer(params),
    option
  );
};

export const useListLayers = (
  params: number,
  option?: UseQueryOptions<IListLayers, Error>
) => {
  return useQuery<IListLayers, Error>(
    [`/collection/layer/list?collectionId`, params],
    () => getListLayerByCollectionId(params),
    option
  );
};

export const useListImageByLayerId = (
  params: number,
  option?: UseQueryOptions<IListImage, Error>
) => {
  return useQuery<IListImage, Error>(
    [`/nfts/list-nfts-by-collection-id`, params],
    () => getListImageByLayerId(params),
    option
  );
};
