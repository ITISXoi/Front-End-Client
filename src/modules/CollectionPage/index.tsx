import Explore1 from "@/components/block/Explore1";
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
      name: "Collection",
      path: "/collection",
    },
    {
      name: "Collection",
    },
  ],
};

export const metadata: Metadata = {
  title: "Login",
};

export const CollectionPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <Explore1 />

      {/* live auction product modal */}
      <LiveAuctionModal />
    </>
  );
};

CollectionPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
