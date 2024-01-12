import { ListAllDraftPage } from "@/modules/ListAllDraftPage";
import { GetStaticPropsContext } from "next";

export default ListAllDraftPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
