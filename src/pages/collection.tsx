import { CollectionPage } from "@/modules/CollectionPage";
import { GetStaticPropsContext } from "next";

export default CollectionPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
