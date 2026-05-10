"use client";

import { ReactNode, useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

import { Student } from "@/types/student";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface MessageDialogProps {
  student: Student;
  children: ReactNode;
}

const MessageDialog = ({ student, children }: MessageDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleSendMessage = () => {
    toast.success(`Message sent to ${student.name}`);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="border-white/10 bg-slate-950 text-white sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Send message
          </DialogTitle>

          <DialogDescription className="text-slate-400">
            Send a quick update to {student.name}.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label>Message</Label>

            <Textarea
              placeholder="Write your message here..."
              className="min-h-32 border-white/10 bg-white/5 text-white"
            />
          </div>

          <Button
            onClick={handleSendMessage}
            className="w-full rounded-2xl bg-violet-500 hover:bg-violet-600"
          >
            <Send className="mr-2 size-4" />
            Send Message
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MessageDialog;