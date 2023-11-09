import { SignupPage } from "@/modules/SingupPage";
import { GetStaticPropsContext } from "next";

export default SignupPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
