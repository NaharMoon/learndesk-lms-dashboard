import {
  BarChart3,
  BookOpen,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const stats = [
  {
    title: "Active Courses",
    value: "24",
    icon: BookOpen,
  },
  {
    title: "Total Students",
    value: "4.1k",
    icon: Users,
  },
  {
    title: "Completion Rate",
    value: "76%",
    icon: BarChart3,
  },
];

const StatsCards = () => {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((item) => (
        <Card
          key={item.title}
          className="rounded-3xl border border-white/10 bg-white/10 text-white backdrop-blur"
        >
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-slate-400">
                {item.title}
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                {item.value}
              </h3>
            </div>

            <div className="flex size-12 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-200">
              <item.icon className="size-6" />
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default StatsCards;