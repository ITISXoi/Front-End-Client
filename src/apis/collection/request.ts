import { request } from "../axios";
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

export const getListCollection = async (
  params: IListCollectionParams
): Promise<IListCollection> => {
  const res: any = await request({
    url: `collection/list`,
    method: "GET",
    params: params,
  });

  return res?.data;
};
export const getMetadataCollection = async (): Promise<IListCollection> => {
  const res: any = await request({
    url: `collection/metadata/list-collection`,
    method: "GET",
  });
  return res?.data;
};

export const getDetailCollection = async (
  params: number
): Promise<ICollection> => {
  const res: any = await request({
    url: `collection/item/${params}`,
    method: "GET",
  });

  return res?.data;
};

export const getListLayer = async (
  params: IListLayerParams
): Promise<IListLayer> => {
  const res: any = await request({
    url: `collection/layer/list`,
    method: "GET",
    params: params,
  });

  return {
    data: res?.data,
    meta: res?.meta,
  };
};

export const getListImageLayer = async (
  params: IListImageLayerParams
): Promise<IListImageLayer> => {
  const res: any = await request({
    url: `collection/layer/image/list`,
    method: "GET",
    params: params,
  });

  return {
    data: res?.data,
    meta: res?.meta,
  };
};
export const getListImageByLayerId = async (
  params: number
): Promise<IListImage> => {
  const res: any = await request({
    url: `/collection/layer/image/list?layerId=${params}`,
    method: "GET",
  });

  return res?.data;
};

export const getListLayerByCollectionId = async (
  params: number
): Promise<IListLayers> => {
  const res: any = await request({
    url: `/collection/layer/list?collectionId=${params}`,
    method: "GET",
  });

  return res?.data;
};
