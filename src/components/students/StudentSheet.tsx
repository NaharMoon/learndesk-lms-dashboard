"use client";

import { BookOpen, Mail, UserRound } from "lucide-react";

import { Student } from "@/types/student";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface StudentSheetProps {
  student: Student;
  children: React.ReactNode;
}

const StudentSheet = ({ student, children }: StudentSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>

      <SheetContent className="border-white/10 bg-slate-950 px-4 py-6 text-white sm:max-w-lg sm:px-6">
        <SheetHeader className="space-y-2 text-left">
          <SheetTitle className="text-white">
            Student Profile
          </SheetTitle>

          <SheetDescription className="text-slate-400">
            Learning progress and enrollment details.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
            <Avatar className="size-14">
              <AvatarFallback className="bg-violet-500 text-lg text-white">
                {student.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>

            <div>
              <h3 className="text-xl font-semibold">
                {student.name}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {student.email}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="size-5 text-violet-300" />

                <h3 className="font-medium">
                  Enrolled Course
                </h3>
              </div>

              <Badge className="bg-violet-500 hover:bg-violet-500">
                {student.status}
              </Badge>
            </div>

            <p className="text-slate-300">
              {student.course}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-4 flex items-center gap-2">
              <UserRound className="size-5 text-violet-300" />

              <h3 className="font-medium">
                Learning Progress
              </h3>
            </div>

            <Progress value={student.progress} className="h-3" />

            <p className="mt-3 text-sm text-slate-400">
              {student.progress}% of the course completed
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <Mail className="size-5 text-violet-300" />

              <h3 className="font-medium">
                Contact
              </h3>
            </div>

            <p className="text-sm text-slate-400">
              {student.email}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default StudentSheet;