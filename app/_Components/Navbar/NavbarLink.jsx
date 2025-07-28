"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavbarLink = ({ Home, name, link, path }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={link}>
              <span
                className={`text-gray-700 ${
                  path === "/" && link === "/"
                    ? "text-green-700"
                    : path === "/api/shop" && link === "/api/shop"
                    ? "text-green-700"
                    : path === "/api/shop" && link === "/"
                    ? "text-gray-500"
                    : ""
                }`}
              >
                {name}
              </span>
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {Home?.map((component) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild>
                    <a
                      href={component.path}
                      className={`block rounded-md p-3 hover:bg-gray-100`}
                    >
                      <div className={`font-medium `}>{component.title}</div>
                      <p className="text-sm text-muted-foreground">
                        {component.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarLink;
