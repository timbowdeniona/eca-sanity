import type { ReactNode } from "react";
import type { Metadata } from "next";

import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/sanity/draft-mode/disable-draft-mode";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import { Analytics } from "@vercel/analytics/react";

import { openSans } from "@/styles/fonts";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "IONA Sanity Demo",
  description: "IONA Sanity Demo",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.variable}>
        <Header />
        {children}
        <Footer />
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
        <Analytics />
      </body>
    </html>
  );
}
