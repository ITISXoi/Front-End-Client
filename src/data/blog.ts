export interface CollectionType {
  id: number;
  img: string;
  url: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: number;
  type: string;
}
export const blog: CollectionType[] = [
  {
    id: 1,
    url: "/draft",
    img: "/assets/images/blog/thumb-1.jpg",
    title: "Draft Your NFTs",
    description: `Where created drafts are saved and you can mint them if the collection is in the minting period. If it's not yet mint time, you can still view and edit them.`,
    author: {
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-2.jpg",
    },
    createdAt: 1640995200000,
    type: "draft",
  },
  {
    id: 2,
    url: "/create-nft",
    img: "/assets/images/blog/thumg-3-1.jpg",
    title: "Custom Your NFTs",
    description: `Where you can create unique NFTs that only you own. You can also create drafts if the collection is not yet minted and can mint at any time during the minting period.`,
    author: {
      name: "Tyler Covington",
      avatar: "/assets/images/avatar/avt-3.jpg",
    },
    createdAt: 1647340800000,
    type: "custom",
  },
  {
    id: 3,
    url: "/random",
    img: "/assets/images/blog/thumb-4.jpg",
    title: "Random Your NFTs",
    description: `You don't like manually selecting layers. Let us help you with just the click of a button. Completely random and not duplicated. You are simply looking forward to interesting things.`,
    author: {
      name: "Freddie Carpenter",
      avatar: "/assets/images/avatar/avt-6.jpg",
    },
    createdAt: 1656633600000,
    type: "random",
  },
];
