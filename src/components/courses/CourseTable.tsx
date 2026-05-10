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

const CourseTable = () => {
  return (
    <Card className="rounded-3xl border border-white/10 bg-white/10 text-white backdrop-blur">
      <CardContent className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
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
            <TableHeader>
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
                  className="border-white/10"
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
                    <Badge className="bg-violet-500 hover:bg-violet-500">
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
                        <DropdownMenuItem>
                          View Details
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                          Edit Course
                        </DropdownMenuItem>

                        <DropdownMenuItem className="text-red-400">
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