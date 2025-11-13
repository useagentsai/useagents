"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      href: "/",
      label: "Tools",
    },
    {
      href: "/videos",
      label: "Videos",
    },
    {
      href: "/about",
      label: "About",
    },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const getLinkClasses = (isActive: boolean) =>
    `transition-colors text-base font-medium ${
      isActive
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-background border-b">
      <div className="mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span className="text-xl font-medium tracking-tight">nt3</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const linkSegment =
                link.href === "/" ? null : link.href.slice(1).split("/")[0];
              const isActive =
                link.href === "/" ? pathname === "/" : segment === linkSegment;
              return (
                <Link
                  className={getLinkClasses(isActive)}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              href="https://github.com/nt3ai"
              target="_blank"
            >
              GitHub
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button size="sm">Join the community</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet onOpenChange={setIsOpen} open={isOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-64" side="right">
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col gap-4">
                    {links.map((link) => {
                      const linkSegment =
                        link.href === "/"
                          ? null
                          : link.href.slice(1).split("/")[0];
                      const isActive =
                        link.href === "/"
                          ? pathname === "/"
                          : segment === linkSegment;
                      return (
                        <Link
                          className={`${getLinkClasses(isActive)} text-lg`}
                          href={link.href}
                          key={link.href}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                    <Link
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      href="https://github.com/nt3ai"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                  </nav>

                  {/* Mobile Action Button */}
                  <Button className="w-full">Join the community</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
