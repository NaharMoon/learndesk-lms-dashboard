"use client";

import { BarChart3, BookOpen, Users } from "lucide-react";

import { Course } from "@/types/course";

import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";

interface CourseSheetProps {
  course: Course;
  children: React.ReactNode;
}

// progress color indicator
const getProgressColor = (progress: number) => {
  if (progress >= 80) return "bg-emerald-400";
  if (progress >= 60) return "bg-sky-400";
  if (progress >= 40) return "bg-amber-400";
  return "bg-red-400";
};
// status badge color
const getStatusStyle = (status: string) => {
  switch (status) {
    case "Published":
      return "bg-emerald-500/20 text-emerald-300 border border-emerald-500/20";

    case "Draft":
      return "bg-slate-500/20 text-slate-300 border border-slate-500/20";

    case "In Review":
      return "bg-amber-500/20 text-amber-300 border border-amber-500/20";

    case "Active":
      return "bg-emerald-500/20 text-emerald-300 border border-emerald-500/20";

    case "Pending":
      return "bg-amber-500/20 text-amber-300 border border-amber-500/20";

    case "Completed":
      return "bg-sky-500/20 text-sky-300 border border-sky-500/20";

    default:
      return "bg-white/10 text-white border border-white/10";
  }
};


const CourseSheet = ({
  course,
  children,
}: CourseSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>

      <SheetContent className="border-white/10 bg-slate-950 px-4 py-6 text-white sm:max-w-lg sm:px-6">
        <SheetHeader>
          <SheetTitle className="text-white">
            {course.title}
          </SheetTitle>

          <SheetDescription className="text-slate-400">
            Course performance overview and analytics.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-6">
          <div className="flex flex-wrap gap-3">
            <Badge className={getStatusStyle(course.status)}>
              {course.status}
            </Badge>

            <Badge
              variant="secondary"
              className="bg-white/10 text-white"
            >
              {course.category}
            </Badge>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-4 flex items-center gap-2">
              <BarChart3 className="size-5 text-violet-300" />

              <h3 className="font-medium">
                Completion Progress
              </h3>
            </div>

            <Progress
              value={course.progress}
              className="h-2"
              indicatorClassName={getProgressColor(course.progress)}
            />

            <p className="mt-3 text-sm text-slate-400">
              {course.progress}% course completion
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Users className="size-5 text-violet-300" />

                <h3 className="font-medium">
                  Students
                </h3>
              </div>

              <p className="text-3xl font-bold">
                {course.students}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-2">
                <BookOpen className="size-5 text-violet-300" />

                <h3 className="font-medium">
                  Instructor
                </h3>
              </div>

              <p className="text-lg font-semibold">
                {course.instructor}
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CourseSheet;