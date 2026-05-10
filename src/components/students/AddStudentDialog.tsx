"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddStudentDialog = () => {
  const [open, setOpen] = useState(false);

  const handleAddStudent = () => {
    toast.success("Student invitation sent successfully");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-2xl bg-violet-500 hover:bg-violet-600">
          <UserPlus className="mr-2 size-4" />
          Add Student
        </Button>
      </DialogTrigger>

      <DialogContent className="border-white/10 bg-slate-950 text-white sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add new student</DialogTitle>

          <DialogDescription className="text-slate-400">
            Invite a learner and assign them to a course.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label>Student name</Label>
            <Input
              placeholder="Enter student name"
              className="border-white/10 bg-white/5 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label>Email address</Label>
            <Input
              type="email"
              placeholder="student@example.com"
              className="border-white/10 bg-white/5 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label>Assign course</Label>
            <Select>
              <SelectTrigger className="border-white/10 bg-white/5 text-white">
                <SelectValue placeholder="Select course" />
              </SelectTrigger>

              <SelectContent className="border-white/10 bg-slate-900 text-white">
                <SelectItem value="react">Advanced React Patterns</SelectItem>
                <SelectItem value="uiux">UI/UX Design Fundamentals</SelectItem>
                <SelectItem value="next">Next.js for Production</SelectItem>
                <SelectItem value="database">Database Architecture</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleAddStudent}
            className="w-full rounded-2xl bg-violet-500 hover:bg-violet-600"
          >
            Send Invitation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudentDialog;