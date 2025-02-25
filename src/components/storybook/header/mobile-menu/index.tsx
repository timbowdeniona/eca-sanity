'use client';

import { ComponentProps, useState } from 'react';

import Link from '@/components/base/link';
import { cn } from '@/utils/helpers/cn';
import LinkIcon from '../../icons/LinkIcon';
import { LinkItem } from '..';

type Props = {
  show?: boolean;
  onClose?: () => void;
  onMenuClick: (link?: LinkItem) => void;
  links?: Array<LinkItem>;
} & ComponentProps<'nav'>;

export const MobileMenu = ({ links, show, onClose }: Props) => {
  const [openLinkId, setOpenLinkId] = useState<string | number | undefined>();

  // Hide MobileMenu if there's no links
  if (!links || links?.length == 0) {
    return null;
  }

  return (
    <div
      className={cn(
        'absolute md:hidden left-0 top-[82px] w-full h-screen bg-purple-40 text-neutral z-50 transition-all overflow-x-hidden px-2',
        show && 'translate-y-0 z-50 pointer-events-auto opacity-100',
        !show && '-translate-y-[82px] z-0 pointer-events-none opacity-0',
      )}
    >
      <ul
        aria-orientation="vertical"
        className="flex flex-col gap-1 overflow-y-auto pb-[51px] pt-2"
        role="menu"
      >
        {links.map((item) => {
          const hasLinks = item.links && item.links?.length > 0;
          const isOpen = openLinkId === item.id;

          return (
            <li key={item.id} role="menuitem">
              <div
                className={cn('flex flex-row bg-white fill-red text-purple', hasLinks && 'pr-4')}
              >
                <Link
                  className={cn(
                    'flex items-center h-12 py-[10px] px-6 flex-grow',
                    item?.type === 'profile' && 'bg-grey',
                  )}
                  href={item.link || '/'}
                  onClick={onClose}
                  target={item.target}
                >
                  <h4>{item.text}</h4>
                </Link>
                {hasLinks && (
                  <button
                    className="px-2"
                    onClick={() => setOpenLinkId(isOpen ? undefined : item.id)}
                    type="button"
                  >
                    <span className="hidden">{item.text}</span>
                    <LinkIcon className={cn('transition-transform', isOpen && 'rotate-90')} />
                  </button>
                )}
              </div>
              {isOpen && item.links && (
                <ul className="space-y-1 pt-1">
                  {item.links.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        className="flex h-12 items-center bg-white px-6 pl-12 font-semibold text-purple"
                        href={subItem.link || '/'}
                        onClick={onClose}
                        target={subItem.target}
                      >
                        {subItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
