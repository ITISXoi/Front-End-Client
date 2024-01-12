import Login from "@/components/block/Login";
import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/layout";
import { Metadata } from "next";

const item = {
  title: "Login",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Page",
      path: "/login",
    },
    {
      name: "Login",
    },
  ],
};

export const metadata: Metadata = {
  title: "Login",
};

export const LoginPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <Login />
    </>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
