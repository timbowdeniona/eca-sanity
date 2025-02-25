'use client';

import type { ComponentProps } from 'react';

import Link from '@/components/base/link';
import { cn } from '@/utils/helpers/cn';
import ChevronLeft from '../../icons/ChevronLeft';
import { LinkItem } from '..';

type Props = {
  className: string;
  links?: Array<LinkItem>;
  onClose: () => void;
  onCloseMenu?: () => void;
} & ComponentProps<'div'>;

export const Submenu = ({ onClose, className, links, onCloseMenu, ...props }: Props) => {
  // Hide Submenu if there's no links
  if (!links || links?.length == 0) {
    return null;
  }

  return (
    <div
      className={cn(
        'block md:absolute w-full h-screen md:h-max md:w-max inset-0 md:right-0 bg-purple-40 md:bg-white text-neutral z-[60]',
        className,
      )}
      {...props}
    >
      <div className="wrapper md:w-max md:p-0">
        <div className="grid grid-cols-1 gap-y-1 md:gap-y-0">
          <div className="flex md:hidden">
            <button
              className="group flex h-12 flex-1 items-center gap-[10px] px-6 py-[10px] text-white hover:text-purple"
              onClick={onClose}
            >
              <ChevronLeft className="h-[15px] fill-white group-hover:fill-purple" />
              <h4>Back</h4>
            </button>
          </div>
          {links &&
            links?.length > 0 &&
            links.map((item) => (
              <div
                className={cn('flex flex-col gap-1 md:gap-4', !item.text && 'md:pt-10')}
                key={item.id}
              >
                {item.text && item.links ? (
                  // Render as a section with title and sub-links
                  <>
                    <h4 className="h-12 px-6 py-[10px] text-purple md:h-auto md:p-0">
                      {item.text}
                    </h4>
                    <ul
                      aria-orientation="vertical"
                      className="flex flex-col gap-1 md:gap-3"
                      role="menu"
                    >
                      {item.links?.map((link) => (
                        <li className="flex flex-col" key={link.id} role="menuitem">
                          <Link
                            className="h-12 bg-white px-6 py-3 font-semibold text-purple hover:bg-purple hover:text-white md:h-auto md:border md:border-purple md:bg-none md:px-4 md:py-2 md:hover:bg-purple-40"
                            href={link.link || '/'}
                            onClick={onCloseMenu}
                          >
                            {link.type === 'emphasizedLink' ? (
                              <p>
                                <b>{link.text}</b>
                              </p>
                            ) : (
                              <p>{link.text}</p>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  // Render as a direct link
                  <Link
                    className="h-12 bg-white px-6 py-3 font-semibold text-purple hover:bg-purple hover:text-white md:h-auto md:border md:border-purple md:bg-none md:px-4 md:py-2 even:md:border-t-0 md:hover:bg-purple-40"
                    href={item.link || '/'}
                    onClick={onCloseMenu}
                  >
                    <p>{item.text}</p>
                  </Link>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Submenu;
