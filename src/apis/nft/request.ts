import axios from "axios";

import { IImageLayer } from "../collection/types";
import {
  ICreateINFT,
  ICreateINFTResponse,
  ICustomizedNFTParams,
  IDraftINFTResponse,
  IGetServerUrlParams,
  IListDraftNFT,
  IListNFT,
  IListNFTParams,
  IMyNFTParams,
  INFT,
  INFTDetailParams,
  INFTDraft,
  IUpdateDraftINFTParams,
  IUpdateDraftINFTResponse,
} from "./types";
import { request } from "../axios";

export const getListNFT = async (params: IListNFTParams): Promise<IListNFT> => {
  const res: any = await request({
    url: `collection/nft`,
    method: "GET",
    params: params,
  });

  return {
    data: res?.data.result,
    meta: res?.meta,
  };
};

export const createNFT = async (
  params: FormData
): Promise<ICreateINFTResponse> => {
  const res: any = await request({
    url: "nft/create",
    method: "POST",
    data: params,
  });

  return res?.data;
};

export const draftNFT = async (
  params: FormData
): Promise<IDraftINFTResponse> => {
  const res: any = await request({
    url: "nft/create-offchain",
    method: "POST",
    data: params,
  });

  return res?.data;
};

export const updateDraftNFT = async (
  params: IUpdateDraftINFTParams
): Promise<IUpdateDraftINFTResponse> => {
  console.log("params", params.data);
  const res: any = await request({
    url: `nft/update-offchain/${params.id}`,
    method: "POST",
    data: params.data,
  });

  return res?.data;
};

export const getListAllDraftNft = async (
  params: IListNFTParams
): Promise<IListDraftNFT> => {
  const res: any = await request({
    url: `nft/list-my-nft-offchain`,
    method: "GET",
    params: params,
  });

  return {
    data: res?.data,
    meta: res?.meta?.pagination,
  };
};

export const getListAllNft = async (
  params: IListNFTParams
): Promise<IListNFT> => {
  const res: any = await request({
    url: `nft/list-nft`,
    method: "GET",
    params: params,
  });

  return {
    data: res?.data,
    meta: res?.meta?.pagination,
  };
};

export const getNFTDetail = async (params: string): Promise<INFT> => {
  const res: any = await request({
    url: `nft/${params}`,
    method: "GET",
  });

  return res?.data;
};

export const getDraftNFTDetail = async (params: string): Promise<INFTDraft> => {
  const res: any = await request({
    url: `nft/offchain/${params}`,
    method: "GET",
  });

  return res?.data;
};

export const getListMyNft = async (params: IMyNFTParams): Promise<IListNFT> => {
  const res: any = await request({
    url: `nft/list-my-nft`,
    method: "GET",
    params: params,
  });

  return {
    data: res?.data,
    meta: res?.meta,
  };
};

export const getListCustomized = async (
  params: ICustomizedNFTParams
): Promise<IListNFT> => {
  const res: any = await request({
    url: `nft/list-nft-offchain`,
    method: "GET",
    params: params,
  });

  return {
    data: res?.data,
    meta: res?.meta,
  };
};

export const getImage = async (
  url: string,
  params?: IListNFTParams
): Promise<any> => {
  const { data, headers } = await axios.get(url, {
    responseType: "arraybuffer",
  });

  return {
    data,
  };
};

export const getImageFromServer = async (
  params?: IGetServerUrlParams
): Promise<any> => {
  const { data }: any = await request({
    url: `image`,
    method: "GET",
    params: params,
  });

  return {
    data,
  };
};

export const generateNFT = async (params: number): Promise<IImageLayer[]> => {
  const res = await request({
    url: `nft/generate?collectionId=${params}`,
    method: "GET",
  });

  return res?.data;
};
