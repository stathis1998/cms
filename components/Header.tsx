"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

export type THeaderProps = {};

export default function Header(props: THeaderProps) {
  const {} = props;

  const pathname = usePathname();

  const links: {
    href: string;
    label: string;
  }[] = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/stores",
      label: "Stores",
    },
    {
      href: "/payments",
      label: "Payments",
    },
    {
      href: "/settings",
      label: "Settings",
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
                className={cn("block px-4 py-2 hover:bg-gray-800 rounded", {
                  "bg-gray-800": pathname === link.href,
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-2">
        <Link
          href="/logout"
          className="rounded block px-4 py-2 hover:bg-gray-800 text-center text-red-400"
        >
          Logout
        </Link>
      </div>
    </header>
  );
}
