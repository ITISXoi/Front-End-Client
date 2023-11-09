import { Metadata } from "next";
import LiveAuction from "@/components/block/LiveAuction";
import PopularCollection from "@/components/block/PopularCollection";
import TopSeller from "@/components/block/TopSeller";
import Hero1 from "@/components/hero/Hero1";
import LiveAuctionModal from "@/components/modal/LiveAuctionModal";
import TodaysPicks from "@/components/block/TodaysPicks";
import CreateSellNft from "@/components/block/CreateSellNft";
import Layout from "@/layout";
import Breadcrumb from "@/components/breadcrumb";
import EditProfile from "@/components/block/EditProfile";

const item = {
  title: "Create Item",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Page",
      path: "/create-item",
    },
    {
      name: "Author",
      path: "/edit-profile",
    },
    {
      name: "Edit Profile",
    },
  ],
};

export const metadata: Metadata = {
  title: "Mint Cuong",
};

export const EditProfilePage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <EditProfile />
    </>
  );
};

EditProfilePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
