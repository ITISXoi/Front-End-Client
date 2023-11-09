import CreateItem from "@/components/block/CreateItem";
import Breadcrumb from "@/components/breadcrumb";
import LiveAuctionModal from "@/components/modal/LiveAuctionModal";
import Layout from "@/layout";
import { Metadata } from "next";

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
      name: "Create Item",
    },
  ],
};

export const metadata: Metadata = {
  title: "Mint Cuong",
};

export const CreateItemPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <CreateItem />

      <LiveAuctionModal />
    </>
  );
};

CreateItemPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
