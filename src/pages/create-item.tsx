import { CreateItemPage } from "@/modules/CreateItemPage";
import { GetStaticPropsContext } from "next";

export default CreateItemPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
