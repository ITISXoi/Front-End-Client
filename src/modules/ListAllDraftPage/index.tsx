import ListAllDraftNFT from "@/components/block/ListAllDraftNFT";
import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/layout";
import { Metadata } from "next";

const item = {
  title: "List All NTFs",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "All NFTs",
    },
  ],
};

export const metadata: Metadata = {
  title: "Login",
};

export const ListAllDraftPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <ListAllDraftNFT />
    </>
  );
};

ListAllDraftPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
