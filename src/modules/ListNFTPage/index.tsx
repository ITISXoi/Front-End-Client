import Explore2 from "@/components/block/Explore2";
import Breadcrumb from "@/components/breadcrumb";
import LiveAuctionModal from "@/components/modal/LiveAuctionModal";
import Layout from "@/layout";
import { Metadata } from "next";

const item = {
  title: "Collection Page",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "NFTs",
      path: "/nfts",
    },
    {
      name: "NFTs",
    },
  ],
};

export const metadata: Metadata = {
  title: "Login",
};

export const ListNFTPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <Explore2 />
    </>
  );
};

ListNFTPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
