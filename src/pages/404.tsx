import { NotFoundPage } from "@/modules/NotFoundPage";
import { GetStaticPropsContext } from "next";

export default NotFoundPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
