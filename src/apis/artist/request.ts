import { request } from "../axios";
import { IListUserArtist, IListUserArtistParams, IUserArtist } from "./types";

export const getListUserArtist = async (
  params?: IListUserArtistParams
): Promise<IListUserArtist> => {
  const res: any = await request({
    url: `/artist/list`,
    method: "GET",
    data: params,
  });

  return {
    data: res?.data,
    meta: res?.meta,
  };
};

export const getDetailArtist = async (params: number): Promise<IUserArtist> => {
  const res: any = await request({
    url: `/artist/item/${params}`,
    method: "GET",
  });

  return res?.data;
};

export const getImage = async (params: number): Promise<IUserArtist> => {
  const res: any = await request({
    url: `/image`,
    method: "GET",
    params: { params },
  });

  return res?.data;
};
