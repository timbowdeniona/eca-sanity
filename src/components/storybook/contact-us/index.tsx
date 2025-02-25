import type { ComponentProps, CSSProperties, ReactNode } from "react";

import Link from "@/components/base/link";
import Image from "next/image";
import UserIcon from "@/components/storybook/icons/UserIcon";

type ContactUsProps = {
  headline: string;
  primaryColor: CSSProperties["color"];
  secondaryColor: CSSProperties["color"];
  name?: string;
  image?: string;
  imageAlt?: string;
  email?: string;
  gcseEmail?: string;
  aLevelEmail?: string;
  role?: string;
  telephone?: string;
  officeHours?: string;
  children?: ReactNode;
} & ComponentProps<"div">;

export const ContactUs = ({
  headline,
  primaryColor,
  secondaryColor,
  name,
  image,
  imageAlt,
  role,
  email,
  gcseEmail,
  aLevelEmail,
  telephone,
  officeHours,
  children,
}: ContactUsProps) => {
  // Hide section if there's no name, email and telephone
  if (!name && !email && !telephone) {
    return null;
  }

  const style = {
    "--contact-item-primary-color": primaryColor,
    "--contact-item-secondary-color": secondaryColor,
  } as CSSProperties;

  return (
    <div
      className="flex flex-col gap-6 bg-[color:var(--contact-item-primary-color)] p-6 pb-12 text-white @clg:aspect-square @clg:p-12"
      style={style}
    >
      <h2>{headline}</h2>
      {name && (
        <div className="relative flex flex-col gap-6 @cmd:flex-row">
          <div className="flex size-[90px] self-center overflow-hidden rounded-full border-[color:var(--contact-item-primary-color)] @cmd:absolute @cmd:left-0 @cmd:top-0 @cmd:border-4">
            {image ? (
              <Image
                alt={imageAlt || ""}
                className="size-full object-cover"
                height={90}
                src={image}
                width={90}
              />
            ) : (
              <UserIcon className="size-full bg-[color:var(--contact-item-primary-color)] fill-[color:var(--contact-item-secondary-color)]" />
            )}
          </div>
          <div className="rounded-full bg-white px-6 pb-5 pt-[18px] text-neutral @cmd:ml-px @cmd:h-[90px] @cmd:min-w-[483px] @cmd:pl-[110px] @clg:w-full @clg:min-w-0">
            {name && <h3>{name}</h3>}
            {role && <p>{role}</p>}
          </div>
        </div>
      )}
      {email && (
        <div className="flex flex-col gap-1">
          <p>
            <b>Email</b>
          </p>
          <Link href={`mailto:${email}`}>
            <h3>{email}</h3>
          </Link>
        </div>
      )}
      {gcseEmail && (
        <div className="flex flex-col gap-1">
          <p>
            <b>Email (GCSE)</b>
          </p>
          <Link href={`mailto:${gcseEmail}`}>
            <h3>{gcseEmail}</h3>
          </Link>
        </div>
      )}
      {aLevelEmail && (
        <div className="flex flex-col gap-1">
          <p>
            <b>Email (AS and A-level)</b>
          </p>
          <Link href={`mailto:${aLevelEmail}`}>
            <h3>{aLevelEmail}</h3>
          </Link>
        </div>
      )}
      {(telephone || officeHours) && (
        <div className="flex flex-col gap-1">
          {telephone && (
            <>
              <p>
                <b>Call</b>
              </p>
              <Link href={`tel:${telephone}`}>
                <h3>{telephone}</h3>
              </Link>
            </>
          )}
          {officeHours && (
            <p>
              <b>{officeHours}</b>
            </p>
          )}
        </div>
      )}

      {children && children}
    </div>
  );
};

export default ContactUs;
