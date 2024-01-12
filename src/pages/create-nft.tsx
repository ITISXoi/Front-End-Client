import { CreateNFTPage } from "@/modules/CreateNFTPage";
import { GetStaticPropsContext } from "next";

export default CreateNFTPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
