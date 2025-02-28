import type { Metadata } from "next";
import { getPageMetadata } from "@/utils/helpers/getPageMetadata";

import EcaMembersPage from "@/components/pages/eca-members";
import { getPageBySlug } from "@/sanity/services/getPage";
import getSocialShare from "@/sanity/services/getSocialShare";
import { notFound } from "next/navigation";
import { getClubs } from "@/sanity/services/getClub";

export const revalidate = 60;

export const generateMetadata = async (): Promise<Metadata> => {
  return getPageMetadata("eca-members");
};

export default async function EcaMembersRoute() {
  const data = await getPageBySlug("eca-members");
  const clubs = await getClubs();
  const socialShare = await getSocialShare();

  if (!data) {
    return notFound();
  }

  return (
    <EcaMembersPage
      breadcrumbEnabled
      clubs={clubs}
      page={data}
      socialShare={socialShare}
    />
  );
}
