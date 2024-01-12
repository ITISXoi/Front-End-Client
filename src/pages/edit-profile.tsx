import { EditProfilePage } from "@/modules/EditProfilePage";
import { GetStaticPropsContext } from "next";

export default EditProfilePage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
