import { AuthorPage } from "@/modules/AuthorPage";
import { GetStaticPropsContext } from "next";

export default AuthorPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
