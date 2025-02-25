import type { FC } from "react";

import getHeader from "@/sanity/services/getHeader";
import Header from "./header";

const RootHeader: FC = async () => {
  const data = await getHeader();
  return <Header header={data} />;
};

export default RootHeader;
