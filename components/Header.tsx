"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";
import {
  ChartBarIcon,
  BuildingStorefrontIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

export type THeaderProps = {};

export default function Header(props: THeaderProps) {
  const {} = props;

  const pathname = usePathname();

  const links: {
    href: string;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      href: "/",
      label: "Dashboard",
      icon: <ChartBarIcon className="w-5 h-5" />,
    },
    {
      href: "/stores",
      label: "Stores",
      icon: <BuildingStorefrontIcon className="w-5 h-5" />,
    },
    {
      href: "/payments",
      label: "Payments",
      icon: <CreditCardIcon className="w-5 h-5" />,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: <Cog6ToothIcon className="w-5 h-5" />,
    },
  ];

  return (
    <header className="w-72 bg-gray-900 flex flex-col">
      <div className="text-xl grid place-items-center h-16">CMS</div>
      <nav className="flex-1 px-2">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "block px-4 py-2 hover:bg-gray-800 rounded",
                  {
                    "bg-gray-800": pathname === link.href,
                  },
                  "flex items-center gap-2"
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-2">
        <Link
          href="/logout"
          className="rounded px-4 py-2 hover:bg-gray-800 text-center text-red-400 flex items-center justify-center gap-2"
        >
          <ArrowLeftOnRectangleIcon className="w-5 h-5" />
          Logout
        </Link>
      </div>
    </header>
  );
}
