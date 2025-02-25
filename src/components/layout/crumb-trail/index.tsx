"use client";

import type { FC } from "react";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import type { SanityPage } from "@/sanity/schema/presentation/pageType";
import type { Breadcrumb } from "@/components/storybook/crumb-trail";
import CrumbTrailComponent from "@/components/storybook/crumb-trail";
import { titleCase } from "@/utils/helpers/titleCase";

type Props = {
  currentPage: string;
  variant: "primary" | "secondary";
  color?: "neutral" | "white";
  page?: SanityPage | null;
};

const convertBreadcrumb = (breadcrumb: string) => {
  return titleCase(breadcrumb.replace(/-/g, " "));
};

const CrumbTrail: FC<Props> = ({
  color = "white",
  currentPage,
  page,
  variant,
}) => {
  const pathname = usePathname();
  const { title, breadcrumbs } = useMemo(() => {
    const paths = pathname.split("/").filter(path => path);
    // remove last element to use page title from Sanity instead
    paths.pop();
    const breadcrumbs = paths.map(
      (path, index) =>
        ({
          link: "/" + paths.slice(0, index + 1).join("/"),
          label: convertBreadcrumb(path),
        }) as Breadcrumb,
    );
    return {
      title: currentPage,
      breadcrumbs,
    };
  }, [currentPage, page, pathname]);

  return (
    <CrumbTrailComponent
      color={color}
      currentPage={title}
      items={breadcrumbs}
      variant={variant}
    />
  );
};

export default CrumbTrail;
