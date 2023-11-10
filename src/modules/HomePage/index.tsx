import CreateSellNft from "@/components/block/CreateSellNft";
import PopularCollection from "@/components/block/PopularCollection";
import TodaysPicks from "@/components/block/TodaysPicks";
import TopArtist from "@/components/block/TopArtist";
import Hero1 from "@/components/hero/Hero1";
import LiveAuctionModal from "@/components/modal/LiveAuctionModal";
import Layout from "@/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mint Cuong",
};

export const HomePage: PageComponent = () => {
  return (
    <>
      <Hero1 />
      {/* <LiveAuction /> */}
      <TopArtist />
      <TodaysPicks style="pad-b-54 no-pt-mb" />
      <PopularCollection />
      <CreateSellNft />

      {/* live auction product modal */}
      <LiveAuctionModal />
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
