import ItemDetailsNFT from "@/components/block/ItemDetailsNFT";
import LiveAuction from "@/components/block/LiveAuction";
import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/layout";
import { Metadata } from "next";

const item = {
  title: "Item Details 1",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "NFT Detail",
    },
  ],
};

export const metadata: Metadata = {
  title: "Mint Cuong",
};

export const NFTMintedDetailPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <ItemDetailsNFT />
      <LiveAuction />
    </>
  );
};

NFTMintedDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
