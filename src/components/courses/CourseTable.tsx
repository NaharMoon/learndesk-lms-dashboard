"use client";

import { MoreHorizontal } from "lucide-react";

import { courses } from "@/data/courses";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CourseDialog from "./CourseDialog";
import CourseSheet from "./CourseSheet";
import { toast } from "sonner";

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

const CourseTable = () => {
  return (
    <Card className="rounded-3xl border border-white/10 bg-white/10 text-white backdrop-blur">
      <CardContent className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-wide
              bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]">
              Course Management
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Manage and monitor all courses
            </p>
          </div>
          <CourseDialog />
        </div>

        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader className="bg-violet-900/30">
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-slate-300">
                  Course
                </TableHead>

                <TableHead className="text-slate-300">
                  Instructor
                </TableHead>

                <TableHead className="text-slate-300">
                  Students
                </TableHead>

                <TableHead className="text-slate-300">
                  Status
                </TableHead>

                <TableHead className="text-right text-slate-300">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {courses.map((course) => (
                <TableRow
                  key={course.id}
                  className="border-white/10 hover:bg-white/5"
                >
                  <TableCell>
                    <div>
                      <h3 className="font-medium">
                        {course.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {course.category}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell className="text-slate-300">
                    {course.instructor}
                  </TableCell>

                  <TableCell className="text-slate-300">
                    {course.students}
                  </TableCell>

                  <TableCell>
                    <Badge className={getStatusStyle(course.status)}>
                      {course.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="hover:bg-white/10"
                        >
                          <MoreHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="border-white/10 bg-slate-900 text-white">
                        <CourseSheet course={course}>
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            View Details
                          </DropdownMenuItem>
                        </CourseSheet>

                        <CourseDialog
                          mode="edit"
                          course={{
                            title: course.title,
                            category: course.category,
                          }}
                        >
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            Edit Course
                          </DropdownMenuItem>
                        </CourseDialog>

                        <DropdownMenuItem
                          className="text-red-400 focus:text-red-400"
                          onClick={() =>
                            toast.warning(`${course.title} moved to archive`)
                          }
                        >
                          Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseTable;