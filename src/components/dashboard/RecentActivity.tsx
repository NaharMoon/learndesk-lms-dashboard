import { Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const activities = [
  {
    title: "New React course published",
    time: "2 hours ago",
    status: "Published",
  },
  {
    title: "UI/UX assignment reviewed",
    time: "5 hours ago",
    status: "Review",
  },
  {
    title: "Database module updated",
    time: "Yesterday",
    status: "Updated",
  },
];
// status badge color
const getStatusStyle = (status: string) => {
  switch (status) {
    case "Published":
      return "bg-emerald-500/20 text-emerald-300 border border-emerald-500/20";

    case "Draft":
      return "bg-slate-500/20 text-slate-300 border border-slate-500/20";

    case "Review":
      return "bg-amber-500/20 text-amber-300 border border-amber-500/20";

    case "Active":
      return "bg-emerald-500/20 text-emerald-300 border border-emerald-500/20";

    case "Pending":
      return "bg-amber-500/20 text-amber-300 border border-amber-500/20";

    case "Updated":
      return "bg-sky-500/20 text-sky-300 border border-sky-500/20";

    default:
      return "bg-white/10 text-white border border-white/10";
  }
};

const RecentActivity = () => {
  return (
    <div className="bg-slate-900 rounded-2xl">
      <div className=" mt-10 flex items-center justify-between p-8">
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-wide
           bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]">
            Recent Activity 
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Latest updates from your workspace
          </p>
        </div>

        <Clock3 className="size-5 text-slate-400" />
      </div>

      <Card className="mt-0 rounded-3xl border border-white/10 bg-white/5 text-white backdrop-blur">

        <CardContent className="p-6">

          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="
              flex items-center justify-between rounded-2xl border border-white/10 p-4
              hover:border-violet-500/30 bg-white/5 hover:bg-violet-400/10
              hover:shadow-[0_0_25px_rgba(168,85,247,0.08)]
              transition-all duration-300
              ">
                <div>
                  <h3 className="font-medium">
                    {activity.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {activity.time}
                  </p>
                </div>

                {/* <Badge className="bg-violet-500 hover:bg-violet-500">
                {activity.status}
              </Badge> */}
                <Badge className={getStatusStyle(activity.status)}>
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentActivity;