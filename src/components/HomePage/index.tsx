import CreateSellNft from "@/componentCommon/block/CreateSellNft";
import LiveAuction from "@/componentCommon/block/LiveAuction";
import PopularCollection from "@/componentCommon/block/PopularCollection";
import TodaysPicks from "@/componentCommon/block/TodaysPicks";
import TopSeller from "@/componentCommon/block/TopSeller";
import Hero1 from "@/componentCommon/hero/Hero1";
import LiveAuctionModal from "@/componentCommon/modal/LiveAuctionModal";

const HomePage = () => {
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
};

export default HomePage;
