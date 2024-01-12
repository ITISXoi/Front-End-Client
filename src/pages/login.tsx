import { LoginPage } from "@/modules/LoginPage";
import { GetStaticPropsContext } from "next";

export default LoginPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
