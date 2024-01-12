import Signup from "@/components/block/Signup";
import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/layout";
import { Metadata } from "next";

const item = {
  title: "Sign Up",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Page",
      path: "/signup",
    },
    {
      name: "Sign Up",
    },
  ],
};

export const metadata: Metadata = {
  title: "Mint Cuong",
};

export const SignupPage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <Signup />
    </>
  );
};

SignupPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
