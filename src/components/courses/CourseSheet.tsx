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

const CourseSheet = ({
  course,
  children,
}: CourseSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>

      <SheetContent className="border-white/10 bg-slate-950 text-white sm:max-w-lg">
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
            <Badge className="bg-violet-500 hover:bg-violet-500">
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
              className="h-3"
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