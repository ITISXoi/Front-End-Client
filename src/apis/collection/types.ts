import { PagedMeta, Paging } from "@/types/util.types";
import { PaginatedResponseOf } from "../types";

export interface ICollection {
  id: number;
  name: string;
  collectionId: number;
  bannerUrl: string;
  imageUrl: string;
  description: string;
  chainId: string;
  address: string;
  paymentToken: string;
  price: string;
  status: string;
  createdId: number;
  isPublic: number;
  totalNfts: number;
  numberLayers: number;
  createdAt: string;
  updatedAt: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  currency: string;
  startMintTime: string;
  endMintTime: string;
  nftMinted: string;
  nftMintedImgs: string;
  bestOffer: string;
  type: string;
  isAutoMint: boolean;
}

export interface IListCollectionParams extends Paging {
  name?: string;
}

export type IListCollection = PaginatedResponseOf<ICollection>;

export interface ILayer {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  collectionId: number;
  fullName: string;
  email: string;
  avatarUrl: string;
  images: IImageLayer[];
}

export interface IListLayerParams extends Paging {
  collectionId: number;
}

export interface IListLayer {
  data: ILayer[];
  meta: PagedMeta;
}

export interface IImageLayer {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  collectionId: number;
  layerId: number;
  price: number;
  layerIndex?: number;
  layerName: string;
  percent: string;
  imagePercent: string;
  imagePrice: string;
  imageName: string;
}

export interface IListImageLayerParams extends Paging {
  layerId: number;
}

export interface IListImageLayer {
  data: ILayer[];
  meta: PagedMeta;
}

export interface IImage {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  collectionId: number;
  layerId: number;
  fullName: string;
  email: string;
  avatarUrl: string;
  remainingQuantity: number;
  quantity: number;
  percent: string;
  price: string;
}

export type IListLayers = PaginatedResponseOf<ILayer>;
export type IListImage = PaginatedResponseOf<IImage>;
