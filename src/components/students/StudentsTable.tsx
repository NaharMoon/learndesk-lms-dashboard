"use client";

import { MoreHorizontal } from "lucide-react";

import { students } from "@/data/students";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
import StudentSheet from "./StudentSheet";
import { toast } from "sonner";
import MessageDialog from "./MessageDialog";
import AddStudentDialog from "./AddStudentDialog";

const StudentsTable = () => {
  return (
    <Card className="rounded-3xl border border-white/10 bg-white/10 text-white backdrop-blur">
      <CardContent className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Students Overview
            </h2>

            <p className="text-sm text-slate-400">
              Monitor student progress and activity
            </p>
          </div>

          <AddStudentDialog />
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-slate-300">
                  Student
                </TableHead>

                <TableHead className="text-slate-300">
                  Course
                </TableHead>

                <TableHead className="text-slate-300">
                  Progress
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
              {students.map((student) => (
                <TableRow
                  key={student.id}
                  className="border-white/10 hover:bg-white/5"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-violet-500 text-white">
                          {student.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="font-medium">
                          {student.name}
                        </p>

                        <p className="text-sm text-slate-400">
                          {student.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="text-slate-300">
                    {student.course}
                  </TableCell>

                  <TableCell>
                    <div className="w-[140px] space-y-2">
                      <Progress value={student.progress} />

                      <p className="text-xs text-slate-400">
                        {student.progress}% completed
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge className="bg-violet-500 hover:bg-violet-500">
                      {student.status}
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

                      <DropdownMenuContent className="border-white/10 bg-slate-950 text-white">
                        <StudentSheet student={student}>
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            View Profile
                          </DropdownMenuItem>
                        </StudentSheet>

                        <MessageDialog student={student}>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            Send Message
                          </DropdownMenuItem>
                        </MessageDialog>

                        <DropdownMenuItem
                          className="text-red-400 focus:text-red-400"
                          onClick={() =>
                            toast.warning(`${student.name} marked for review`)
                          }
                        >
                          Suspend
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

export default StudentsTable;