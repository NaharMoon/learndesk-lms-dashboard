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

const RecentActivity = () => {
  return (
    <Card className="rounded-3xl border border-white/10 bg-white/10 text-white backdrop-blur">
      <CardContent className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Recent Activity
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Latest updates from your workspace
            </p>
          </div>

          <Clock3 className="size-5 text-slate-400" />
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div>
                <h3 className="font-medium">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {activity.time}
                </p>
              </div>

              <Badge className="bg-violet-500 hover:bg-violet-500">
                {activity.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;