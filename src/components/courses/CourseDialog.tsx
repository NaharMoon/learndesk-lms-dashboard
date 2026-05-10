"use client";

import { Plus } from "lucide-react";
import { ReactNode, useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";

interface CourseDialogProps {
  mode?: "create" | "edit";
  course?: {
    title: string;
    category: string;
  };
  children?: ReactNode;
}

const CourseDialog = ({
  mode = "create",
  course,
  children,
}: CourseDialogProps) => {
  const [open, setOpen] = useState(false);
  const handleSubmit = () => {
    if (mode === "edit") {
      toast.success("Course changes saved successfully");
      setOpen(false);
      return;
    }

    toast.success("Course draft created successfully");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button className="rounded-2xl bg-violet-500 hover:bg-violet-600">
            <Plus className="mr-2 size-4" />
            Create Course
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="border-white/10 bg-slate-950 text-white sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {mode === "edit" ? "Edit course" : "Create a new course"}
          </DialogTitle>

          <DialogDescription className="text-slate-400">
            {mode === "edit"
              ? "Update course information and settings."
              : "Add basic course details before publishing it to learners."}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label>Course title</Label>

            <Input
              placeholder="Next.js for Production"
              defaultValue={course?.title}
              className="border-white/10 bg-white/5 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>

            <Select defaultValue={course?.category}>
              <SelectTrigger className="border-white/10 bg-white/5 text-white">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>

              <SelectContent className="border-white/10 bg-slate-900 text-white">
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Development">Development</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Description</Label>

            <Textarea
              placeholder="Write a short course description..."
              className="min-h-28 border-white/10 bg-white/5 text-white"
            />
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full rounded-2xl bg-violet-500 hover:bg-violet-600"
          >
            {mode === "edit" ? "Save Changes" : "Save Draft"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDialog;