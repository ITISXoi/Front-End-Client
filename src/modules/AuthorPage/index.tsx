import AuthorProfile from "@/components/block/AuthorProfile";
import Breadcrumb from "@/components/breadcrumb";
import LiveAuctionModal from "@/components/modal/LiveAuctionModal";
import Layout from "@/layout";
import { Metadata } from "next";

const item = {
  title: "Authors",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Page",
      path: "/authors-2",
    },
    {
      name: "Authors",
    },
  ],
};

export const metadata: Metadata = {
  title: "Mint Cuong",
};

export const AuthorPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <AuthorProfile />

      {/* live auction product modal */}
      <LiveAuctionModal />
    </>
  );
};

AuthorPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
