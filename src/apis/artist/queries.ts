import { UseQueryOptions, useQuery } from 'react-query';

import { getDetailArtist, getListUserArtist } from './request';
import { IListUserArtist, IListUserArtistParams, IUserArtist } from './types';

export const useListUserArtist = (params?: IListUserArtistParams, option?: UseQueryOptions<IListUserArtist, Error>) => {
  return useQuery<IListUserArtist, Error>(['/artist/list', params], () => getListUserArtist(params), option);
};

export const useDetailArtist = (params: number, option?: UseQueryOptions<IUserArtist, Error>) => {
  return useQuery<IUserArtist, Error>([`/artist/item`, params], () => getDetailArtist(params), option);
};
