import HomePage from "@/components/HomePage";
import { Inter } from "next/font/google";
import MainLayout from "./MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}
