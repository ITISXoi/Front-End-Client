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
import Signup from "@/components/block/Signup";

const item = {
  title: "Sign Up",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Page",
      path: "/signup",
    },
    {
      name: "Sign Up",
    },
  ],
};

export const metadata: Metadata = {
  title: "Mint Cuong",
};

export const SignupPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <Signup />
    </>
  );
};

SignupPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
