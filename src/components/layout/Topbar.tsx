import { Bell, Search } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

        <Input
          placeholder="Search courses..."
          className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-400"
        />
      </div>

      <div className="ml-4 flex items-center gap-4">
        <Badge className="bg-violet-500 hover:bg-violet-500">
          shadcn/ui
        </Badge>

        <button className="rounded-2xl bg-white/10 p-3 transition hover:bg-white/20">
          <Bell className="size-5" />
        </button>

        <Avatar>
          <AvatarFallback className="bg-violet-500 text-white">
            MN
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Topbar;