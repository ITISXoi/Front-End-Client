import { ListNFTPage } from "@/modules/ListNFTPage";
import { GetStaticPropsContext } from "next";

export default ListNFTPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
