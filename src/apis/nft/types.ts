import { PagedMeta, Paging } from '@/types/util.types';

import { IImageLayer } from '../collection/types';

export interface INFT {
  id: string;
  token_address: string;
  tokenId: string;
  owner: string;
  block_number: string;
  block_number_minted: string;
  token_hash: string;
  amount: string;
  contract_type: string;
  contractAddress: string;
  name: string;
  symbol: string;
  tokenUri: string;
  metadata: string;
  last_token_uri_sync: string;
  last_metadata_sync: string;
  minter_address: string;
  imageUrl: string;
  description: string;
  collectionName: string;
  chainId: string;
  status: string;
  attributes: string;
  price: string;
  type: string;
}
export interface INFTDraft {
  collectionKeyId: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageType: string;
  note: string;
  properties: string;
  data: string;
  id: string;
  type: string;
  url_ipfs: string;
  signature: string;
  images: IImageLayer[];
  price: string;
  collectionName: string;
  attributes: string;
}
export interface IListNFT {
  data: INFT[];
  meta: PagedMeta;
}
export interface IListDraftNFT {
  data: INFTDraft[];
  meta: PagedMeta;
}
export interface IListNFTParams extends Paging {
  type?: string;
  address?: string;
  chain?: string;
}
export interface IUpdateDraftINFTParams {
  id: number;
  data: FormData;
}

export interface IImageAttributes {
  imageDescription?: string;
  imageName?: string;
  imagePercent?: string;
  imagePrice?: string;
  imageProbability?: string;
  imageQuantity?: number;
  imageRemainingQuantity?: number;
  layerName?: string;
}

export interface ICreateINFT {
  name: string;
  images: any;
  collectionId: string | number;
  collectionName: string;
  description?: string;
  note?: string;
  properties: string;
  imageIds: string;
}
export interface IDraftINFT {
  name: string;
  images: any;
  collectionId: string | number;
  collectionName: string;
  description?: string;
  note?: string;
  imageIds: string;
}
export interface IUpdateDraftINFT {
  name: string;
  images: any;
  collectionId: string | number;
  price: string;
  description?: string;
  note?: string;
  imageIds: string;
}
export interface ICreateINFTResponse {
  collectionId: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageType: string;
  note: string;
  properties: string;
  data: string;
  id: string;
  type: string;
  url_ipfs: string;
  signature: string;
  hashUniqueNft: string;
}

export interface IDraftINFTResponse {
  collectionId: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageType: string;
  note: string;
  properties: string;
  data: string;
  id: string;
  type: string;
  url_ipfs: string;
  signature: string;
}
export interface IUpdateDraftINFTResponse {
  collectionId: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageType: string;
  note: string;
  properties: string;
  data: string;
  id: string;
  type: string;
  url_ipfs: string;
  signature: string;
}
export interface INFTDetailParams {
  address?: string;
  chain?: string;
  token_id: number;
}

export interface IMyNFTParams extends Paging {
  wallet?: string;
  address?: string;
  chain?: string;
  id?: string;
}

export interface IGetServerUrlParams {
  url: string;
}

export interface IDetailNFT {
  urL: string;
  name: string;
  created_by: string;
  collection: string;
  owner: string;
  description: string;
  listing_price: number;
  contract_address: string;
  token: string;
  chain: string;
  view_on: string;
}

export interface ICustomizedNFTParams extends Paging {
  type: string;
  collectionKeyId?: number;
}
