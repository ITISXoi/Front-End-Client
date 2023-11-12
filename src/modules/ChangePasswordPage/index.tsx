import ChangePassword from "@/components/block/ChangePassword";
import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/layout";
import { Metadata } from "next";

const item = {
  title: "Change Password",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Change Password",
    },
  ],
};

export const metadata: Metadata = {
  title: "Login",
};

export const ChangePasswordPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <ChangePassword />
    </>
  );
};

ChangePasswordPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
