"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, BookOpen, GraduationCap, LayoutDashboard, Menu, Search, Users } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "/courses", icon: BookOpen },
  { label: "Students", href: "/students", icon: Users },
];

const Topbar = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-2xl bg-white/10 hover:bg-white/20 lg:hidden"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="border-white/10 bg-slate-950 text-white"
          >
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3 text-white">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-violet-500">
                  <GraduationCap className="size-5" />
                </div>
                LearnDesk
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-8 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-violet-500 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <item.icon className="size-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

          <Input
            placeholder="Search courses..."
            className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <Badge className="bg-violet-500 hover:bg-violet-500">
          shadcn/ui
        </Badge>

        <button className="rounded-2xl bg-white/10 p-3 transition hover:bg-white/20">
          <Bell className="size-5" />
        </button>

        <Avatar>
          <AvatarFallback className="bg-violet-500 text-white">
            MN
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Topbar;