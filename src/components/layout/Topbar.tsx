"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, BookOpen, GraduationCap, LayoutDashboard, Menu, Search, Users } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "/courses", icon: BookOpen },
  { label: "Students", href: "/students", icon: Users },
];

const Topbar = () => {
  const pathname = usePathname();

  return (
    <header className="flex gap-4 rounded-xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-5">
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
            className="border-white/10 bg-slate-950 px-4 py-6 text-white sm:max-w-lg sm:px-6"
          >
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3 text-white">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-violet-500">
                  <GraduationCap className="size-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-wide
                    bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]">
                    LearnDesk
                  </h1>

                  <p className="text-xs text-slate-400">
                    LMS Dashboard
                  </p>
                </div>
              </SheetTitle>
            </SheetHeader>
            <hr />
            <nav className="mt-8 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${isActive
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

        <div className="relative w-full lg:w-120 sm:w-80">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

          <Input
            placeholder="Search courses..."
            className="border-white/10 bg-white/5 pl-10 py-5 text-white placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 sm:justify-end">

        {/* bell button interactive */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative rounded-full bg-white/10 p-2.5 transition hover:bg-white/20">
              <Bell className="size-5" />

              <span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-violet-500 ring-2 ring-slate-900" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-72 border-white/10 bg-slate-950 text-white"
          >
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>

            <DropdownMenuSeparator className="bg-white/10" />

            <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
              <p className="text-sm font-medium">
                New student enrolled
              </p>

              <span className="text-xs text-slate-400">
                Emma Watson joined Advanced React Patterns
              </span>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
              <p className="text-sm font-medium">
                Course updated
              </p>

              <span className="text-xs text-slate-400">
                UI/UX Fundamentals draft was reviewed
              </span>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
              <p className="text-sm font-medium">
                Assignment submitted
              </p>

              <span className="text-xs text-slate-400">
                Michael Brown submitted final project
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

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