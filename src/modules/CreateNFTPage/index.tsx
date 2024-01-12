import CustomNFT from "@/components/block/AuthorProfile";
import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/layout";
import { Metadata } from "next";

const item = {
  title: "Create NFTs",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Detail Collection",
      path: "/authors-2",
    },
    {
      name: "Create NFTs",
    },
  ],
};

export const metadata: Metadata = {
  title: "Mint Cuong",
};

export const CreateNFTPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <CustomNFT />
    </>
  );
};

CreateNFTPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
