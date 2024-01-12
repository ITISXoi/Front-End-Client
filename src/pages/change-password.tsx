import { ChangePasswordPage } from "@/modules/ChangePasswordPage";
import { GetStaticPropsContext } from "next";

export default ChangePasswordPage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
