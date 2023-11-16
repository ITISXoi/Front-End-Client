interface NavigationType {
  id: number;
  name: string;
  path: string;
}

export const navigationIsLogin: NavigationType[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Login",
    path: "/login",
  },
];

export const navigationLogin: NavigationType[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Collection",
    path: "/collection",
  },
  {
    id: 3,
    name: "NFTs",
    path: "/list-all-nft",
  },
  {
    id: 4,
    name: "Artist",
    path: "/nfts",
  },
];

export const navigation: NavigationType[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Collection",
    path: "/collection",
  },
  {
    id: 3,
    name: "NFTs",
    path: "/nfts",
  },
  {
    id: 4,
    name: "Artist",
    path: "/nfts",
  },
];
