import {
  defineDocuments,
  defineLocations,
  PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    page: defineLocations({
      select: {
        title: "title",
        pathname: "slug.current",
      },
      resolve(doc) {
        if (!doc?.pathname) {
          return null;
        }

        return {
          locations: [
            {
              href: `${doc.pathname}`,
              title: doc?.title || "",
            },
          ],
        };
      },
    }),
  },
  mainDocuments: defineDocuments([
    {
      route: "/",
      filter: "_type == 'page' && slug.current == '/'",
    },
    {
      route: "/:slug",
      resolve(ctx) {
        return {
          filter: "_type == 'page' && slug.current == $url",
          params: { url: ctx.params.slug },
        };
      },
    },
    {
      route: "/:slug/:subpage",
      resolve(ctx) {
        return {
          filter:
            "_type == 'page' && _id in *[_type == 'page' && slug.current == $pageSlug].subpages[]._ref && slug.current match ($subpageSlug + '$')",
          params: {
            pageSlug: ctx.params.slug,
            subpageSlug: ctx.params.subpage,
          },
        };
      },
    },
  ]),
};
