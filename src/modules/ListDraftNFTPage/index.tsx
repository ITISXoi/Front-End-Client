import ListDraftNFT from "@/components/block/ListDraftNFT";
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

export const ListDraftNFTPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <ListDraftNFT />
    </>
  );
};

ListDraftNFTPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
