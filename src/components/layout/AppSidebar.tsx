"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Users,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Courses",
    href: "/courses",
    icon: BookOpen,
  },
  {
    label: "Students",
    href: "/students",
    icon: Users,
  },
];

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full w-[260px] shrink-0 rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur lg:block">
      <div className="mb-8 flex items-center gap-3">
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
      </div>
      <hr />
      <nav className="space-y-2 mt-5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                isActive
                  ? "bg-violet-500 shadow-[0_0_20px_rgba(168,85,247,0.18)] text-white"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="size-5" />

              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AppSidebar;