import { HomePage } from "@/modules/HomePage";
import { GetStaticPropsContext } from "next";

export default HomePage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
