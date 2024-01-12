import { PagedMeta, Paging } from "@/types/util.types";

export interface IUserArtist {
  list: {
    id: number;
    fullName: string;
    email: string;
    avatarUrl: string;
    idActive: number;
  }[];
}

export interface IListUserArtist {
  data: IUserArtist;
  meta: PagedMeta;
}

export interface IListUserArtistParams extends Paging {
  name: string;
}
