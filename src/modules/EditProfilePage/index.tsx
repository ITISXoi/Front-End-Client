import EditProfile from "@/components/block/EditProfile";
import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/layout";
import { Metadata } from "next";

const item = {
  title: "Edit Profile",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Author",
      path: "/edit-profile",
    },
    {
      name: "Edit Profile",
    },
  ],
};

export const metadata: Metadata = {
  title: "Mint Cuong",
};

export const EditProfilePage: PageComponent = () => {
  return (
    <>
      <Breadcrumb data={item} />
      <EditProfile />
    </>
  );
};

EditProfilePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
