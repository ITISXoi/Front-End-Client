import BlogItem from "@/components/block/BlogItem";
import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/layout";
import { Metadata } from "next";

const item = {
  title: "Detail Collection",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Detail Collection",
    },
  ],
};

export const metadata: Metadata = {
  title: "Login",
};

export const DetailCollectionPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <BlogItem />
    </>
  );
};

DetailCollectionPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
