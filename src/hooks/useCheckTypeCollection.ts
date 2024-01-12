import { IListNFT } from "@/apis/nft/types";

export const useCheckTypeCollection = (
  type: string | undefined,
  items: IListNFT | undefined,
  isAutoMint: boolean | undefined,
) => {
  const dataUI = [
    {
      imageURL: '',
      content: 'Use customized NFT',
      name: 'DRAFT NFT',
      url: 'draft',
    },
    {
      imageURL: '',
      content: 'Manually design your own NFT',
      name: 'CUSTOM NFT',
      url: 'design',
    },
    {
      imageURL: '',
      content: 'Get Random NFT with lower cost',
      name: 'RANDOM NFT',
      url: 'random',
    },
  ];
  return dataUI;

  // if (type === 'composite' && items?.data.length !== 0) {
  //   dataUI = [
  //     {
  //       imageURL: '',
  //       content: 'Use customized NFT',
  //       name: 'DRAFT NFT',
  //       url: 'draft',
  //     },
  //     {
  //       imageURL: '',
  //       content: 'Manually design your own NFT',
  //       name: 'CUSTOM NFT',
  //       url: 'design',
  //     },
  //     {
  //       imageURL: '',
  //       content: 'Get Random NFT with lower cost',
  //       name: 'RANDOM NFT',
  //       url: 'random',
  //     },
  //   ];
  // }
  // if (type === 'composite' && items?.data.length === 0) {
  //   dataUI = [
  //     {
  //       imageURL: '',
  //       content: 'Manually design your own NFT',
  //       name: 'CUSTOM NFT',
  //       url: 'design',
  //     },
  //     {
  //       imageURL: '',
  //       content: 'Get Random NFT with lower cost',
  //       name: 'RANDOM NFT',
  //       url: 'random',
  //     },
  //   ];
  // }
  // if (type === 'general' && items?.data.length !== 0) {
  //   dataUI = [
  //     {
  //       imageURL: '',
  //       content: 'Use customized NFT',
  //       name: 'DRAFT NFT',
  //       url: 'draft',
  //     },
  //     {
  //       imageURL: '',
  //       content: 'Manually design your own NFT',
  //       name: 'CUSTOM NFT',
  //       url: 'design',
  //     },
  //   ];
  // }
  // if (type === 'general' && items?.data.length === 0) {
  //   dataUI = [
  //     {
  //       imageURL: '',
  //       content: 'Manually design your own NFT',
  //       name: 'CUSTOM NFT',
  //       url: 'design',
  //     },
  //   ];
  // }
  // if (type === 'random' && items?.data.length !== 0) {
  //   dataUI = [
  //     {
  //       imageURL: '',
  //       content: 'Use customized NFT',
  //       name: 'DRAFT NFT',
  //       url: 'draft',
  //     },
  //     {
  //       imageURL: '',
  //       content: 'Get Random NFT with lower cost',
  //       name: 'RANDOM NFT',
  //       url: 'random',
  //     },
  //   ];
  // }
  // if (type === 'random' && items?.data.length === 0) {
  //   dataUI = [
  //     {
  //       imageURL: '',
  //       content: 'Get Random NFT with lower cost',
  //       name: 'RANDOM NFT',
  //       url: 'random',
  //     },
  //   ];
  // }
  // if (isAutoMint) {
  //   dataUI = [
  //     {
  //       imageURL: '',
  //       content: 'Use customized NFT',
  //       name: 'DRAFT NFT',
  //       url: 'draft',
  //     },
  //   ];
  // }
  // return dataUI;
};
