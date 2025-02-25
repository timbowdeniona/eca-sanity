import type { ReactNode } from "react";
import type { Metadata } from "next";

import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/sanity/draft-mode/disable-draft-mode";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import { Analytics } from "@vercel/analytics/react";
import OneTrustConsent from "@/components/analytics/one-trust/consent";
import { GTMBodySnippet, GTMHeadSnippet } from "@/components/analytics/gtm";

import { openSans } from "@/styles/fonts";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "AQA Microsites",
  description: "AQA Microsite Builder",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <OneTrustConsent />
      <GTMHeadSnippet />
      <body className={openSans.variable}>
        <GTMBodySnippet />
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
