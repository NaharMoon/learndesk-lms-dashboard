"use client";

import { Plus } from "lucide-react";
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

const CourseDialog = () => {
  const handleCreateCourse = () => {
    toast.success("Course draft created successfully");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-2xl bg-violet-500 hover:bg-violet-600">
          <Plus className="mr-2 size-4" />
          Create Course
        </Button>
      </DialogTrigger>

      <DialogContent className="border-white/10 bg-slate-950 text-white sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create a new course</DialogTitle>

          <DialogDescription className="text-slate-400">
            Add basic course details before publishing it to learners.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label>Course title</Label>
            <Input
              placeholder="Next.js for Production"
              className="border-white/10 bg-white/5 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Select>
              <SelectTrigger className="border-white/10 bg-white/5 text-white">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>

              <SelectContent className="border-white/10 bg-slate-900 text-white">
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="database">Database</SelectItem>
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
            onClick={handleCreateCourse}
            className="w-full rounded-2xl bg-violet-500 hover:bg-violet-600"
          >
            Save Draft
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDialog;