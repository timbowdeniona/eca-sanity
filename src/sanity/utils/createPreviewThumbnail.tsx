import Image from "next/image";
import FilePdf from "@/components/storybook/icons/FilePdf";
import FileWeb from "@/components/storybook/icons/FileWeb";
import FileDocx from "@/components/storybook/icons/FileDocx";
import FileZip from "@/components/storybook/icons/FileZip";
import FilePpt from "@/components/storybook/icons/FilePpt";
import FileExcel from "@/components/storybook/icons/FileExcel";
import FileUas from "@/components/storybook/icons/FileUas";
import FileAudio from "@/components/storybook/icons/FileAudio";
import FileVideo from "@/components/storybook/icons/FileVideo";
import FileLocked from "@/components/storybook/icons/FileLocked";
import FileCalendar from "@/components/storybook/icons/FileCalendar";
import FileSubject from "@/components/storybook/icons/FileSubject";
import { cn } from "@/utils/helpers/cn";

export type FilePreviewIcon =
  | "pdf"
  | "web"
  | "docx"
  | "ppt"
  | "zip"
  | "excel"
  | "uas"
  | "audio"
  | "video"
  | "locked"
  | "cal"
  | "sub";

const createPreviewThumbnail = (
  image: string | FilePreviewIcon,
  imageAlt?: string,
  size: "small" | "large" = "small",
) => {
  const filePreviewClassname = cn(
    "aspect-[40.581/54.108] h-full w-full",
    size === "large" && "p-4",
  );
  const filePreviewIcons: Record<FilePreviewIcon, JSX.Element> = {
    pdf: <FilePdf className={filePreviewClassname} />,
    web: <FileWeb className={filePreviewClassname} />,
    docx: <FileDocx className={filePreviewClassname} />,
    ppt: <FilePpt className={filePreviewClassname} />,
    zip: <FileZip className={filePreviewClassname} />,
    excel: <FileExcel className={filePreviewClassname} />,
    uas: <FileUas className={filePreviewClassname} />,
    audio: <FileAudio className={filePreviewClassname} />,
    video: <FileVideo className={filePreviewClassname} />,
    locked: <FileLocked className={filePreviewClassname} />,
    cal: <FileCalendar className={filePreviewClassname} />,
    sub: <FileSubject className={filePreviewClassname} />,
  };

  if (Object.keys(filePreviewIcons).includes(image)) {
    return filePreviewIcons[image as FilePreviewIcon];
  }
  return (
    <div className="aspect-[40.581/54.108] max-h-[70%]">
      <Image
        alt={imageAlt || ""}
        className="size-full object-cover"
        height={180}
        src={image}
        width={320}
      />
    </div>
  );
};

export default createPreviewThumbnail;
