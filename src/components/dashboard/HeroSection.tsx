import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-500/20 via-slate-900 to-fuchsia-500/10 p-8 shadow-2xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium text-violet-200">
            Instructor Workspace
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Manage courses and students from one modern dashboard.
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-300">
            LearnDesk is a modern LMS dashboard UI concept built with
            Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button className="rounded-2xl bg-violet-500 hover:bg-violet-600">
            Create Course
          </Button>

          <Button
            variant="secondary"
            className="rounded-2xl border border-white/10 bg-white/10 text-white hover:bg-white/20"
          >
            Analytics
            <ArrowUpRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;