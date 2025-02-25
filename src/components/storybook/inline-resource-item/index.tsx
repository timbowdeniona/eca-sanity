import type { ComponentProps, ReactNode } from "react";

import Link from "@/components/base/link";
import FilePdf from "@/components/storybook/icons/FilePdf";
import FileDocx from "@/components/storybook/icons/FileDocx";
import FileExcel from "@/components/storybook/icons/FileExcel";
import FilePpt from "@/components/storybook/icons/FilePpt";
import FileZip from "@/components/storybook/icons/FileZip";
import FileAudio from "@/components/storybook/icons/FileAudio";
import FileVideo from "@/components/storybook/icons/FileVideo";

type Props = {
  children?: ReactNode;
  extension: string;
  size: string;
  url: string;
} & ComponentProps<"div">;

export const InlineResource = ({
  className,
  children,
  extension,
  size,
  url,
}: Props) => {
  const FileIcons: Record<string, { component: JSX.Element }> = {
    pdf: { component: <FilePdf className="size-5" /> },
    doc: { component: <FileDocx className="size-5" /> },
    docx: { component: <FileDocx className="size-5" /> },
    xls: { component: <FileExcel className="size-5" /> },
    xlsx: { component: <FileExcel className="size-5" /> },
    ppt: { component: <FilePpt className="size-5" /> },
    pptx: { component: <FilePpt className="size-5" /> },
    zip: { component: <FileZip className="size-5" /> },
    mp3: { component: <FileAudio className="size-5" /> },
    mp4: { component: <FileVideo className="size-5" /> },
    file: { component: <FileZip className="size-5" /> },
  };

  const { component } = FileIcons[extension] ?? FileIcons.file;

  return (
    <span className="inline-flex flex-row flex-wrap items-baseline gap-1">
      {component}
      <Link className={className} href={url ?? ""} target="_blank">
        {children}
      </Link>{" "}
      {size && <span>({size})</span>}
    </span>
  );
};
