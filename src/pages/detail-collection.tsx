import { DetailCollectionPage } from "@/modules/DetailCollectionPage";
import { GetStaticPropsContext } from "next";

export default DetailCollectionPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
