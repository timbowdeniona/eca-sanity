import type { FC } from "react";

import type { SanityFooter } from "@/sanity/schema/presentation/layout/footer";
import getFooter from "@/sanity/services/getFooter";
import Footer from "./footer";

export type Props = {
  footer: SanityFooter | null;
};

const RootFooter: FC = async () => {
  const { data } = await getFooter();
  return <Footer footer={data} />;
};

export default RootFooter;
