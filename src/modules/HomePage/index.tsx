import { Metadata } from "next";
import LiveAuction from "@/components/block/LiveAuction";
import PopularCollection from "@/components/block/PopularCollection";
import TopSeller from "@/components/block/TopSeller";
import Hero1 from "@/components/hero/Hero1";
import LiveAuctionModal from "@/components/modal/LiveAuctionModal";
import TodaysPicks from "@/components/block/TodaysPicks";
import CreateSellNft from "@/components/block/CreateSellNft";
import Layout from "@/layout";

export const metadata: Metadata = {
  title: "Mint Cuong",
};

export const HomePage: PageComponent = () => {
  return (
    <>
      <Hero1 />
      <LiveAuction />
      <TopSeller />
      <TodaysPicks style="pad-b-54 no-pt-mb" />
      <PopularCollection />
      <CreateSellNft />

      {/* live auction product modal */}
      <LiveAuctionModal />
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
