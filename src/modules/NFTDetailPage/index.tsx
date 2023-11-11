import CreateSellNft from "@/components/block/CreateSellNft";
import ItemDetails1 from "@/components/block/ItemDetails1";
import LiveAuction from "@/components/block/LiveAuction";
import PopularCollection from "@/components/block/PopularCollection";
import TodaysPicks from "@/components/block/TodaysPicks";
import TopArtist from "@/components/block/TopArtist";
import Breadcrumb from "@/components/breadcrumb";
import Hero1 from "@/components/hero/Hero1";
import LiveAuctionModal from "@/components/modal/LiveAuctionModal";
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

export const NFTDetailPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <ItemDetails1 />
      <LiveAuction />
    </>
  );
};

NFTDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
