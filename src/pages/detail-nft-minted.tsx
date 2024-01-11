import { NFTMintedDetailPage } from "@/modules/NFTMintedDetailPage";
import { GetStaticPropsContext } from "next";

export default NFTMintedDetailPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
