import type { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { openSans } from "@/styles/fonts";
import "@/styles/globals.scss";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "AQA GAS Studio",
  description: "AQA Global Assessment Services Studio",
};

const StudioLayout: FC<Props> = ({ children }) => (
  <html lang="en">
    <body className={openSans.variable}>{children}</body>
  </html>
);

export default StudioLayout;
