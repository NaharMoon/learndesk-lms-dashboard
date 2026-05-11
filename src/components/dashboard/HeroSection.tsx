import CourseDialog from "@/components/courses/CourseDialog";
import AddStudentDialog from "../students/AddStudentDialog";
import AnalyticsDialog from "./AnalyticsDialog";
import { Badge } from "../ui/badge";
import { LayoutDashboard } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1e1b4b] via-[#3b0764] to-[#020617] p-8 shadow-2xl mb-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Badge className="bg-sky-500/20 text-sky-300 border border-sky-500/30 py-3">
            <LayoutDashboard />
            Instructor Workspace
          </Badge>

          <h1 className="font-heading text-5xl font-bold tracking-tight md:text-6xl">
            Empower modern learning with a{" "}
            <span className="bg-gradient-to-r from-violet-200 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]">
              smarter LMS workspace.
            </span>
          </h1>

          <p className="mt-7 text-base leading-7 text-slate-400">
            Monitor student progress, manage courses, and explore analytics through an elegant instructor dashboard.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">

          <AnalyticsDialog />
          <AddStudentDialog />
          <CourseDialog />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;