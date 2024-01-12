import { NFTDetailPage } from "@/modules/NFTDetailPage";
import { GetStaticPropsContext } from "next";

export default NFTDetailPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
