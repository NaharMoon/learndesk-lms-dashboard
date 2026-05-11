"use client";

import {
    TrendingUp,
    Users,
    BookOpen,
    BadgeCheck,
    BarChart3,
} from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    CartesianGrid,
} from "recharts";

const analyticsData = [
    { month: "Jan", students: 1200 },
    { month: "Feb", students: 1600 },
    { month: "Mar", students: 2100 },
    { month: "Apr", students: 2800 },
    { month: "May", students: 3400 },
    { month: "Jun", students: 4100 },
];

const stats = [
    {
        title: "Total Students",
        value: "4.1k",
        icon: Users,
    },
    {
        title: "Active Courses",
        value: "24",
        icon: BookOpen,
    },
    {
        title: "Completion Rate",
        value: "76%",
        icon: BadgeCheck,
    },
];

const AnalyticsDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    className="relative overflow-hidden group rounded-2xl border border-violet-400/30 bg-violet-500/20 text-white shadow-[0_0_24px_rgba(168,85,247,0.18)] transition-all duration-300 hover:bg-violet-500/30 hover:shadow-[0_0_34px_rgba(168,85,247,0.28)]"
                >
                    <span className="absolute inset-0 rounded-2xl border border-violet-400/40" />

                    <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,transparent,rgba(168,85,247,0.35),transparent)] animate-[shine_3s_linear_infinite]" />
                    Analytics
                    <TrendingUp className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
            </DialogTrigger>

            <DialogContent className="border border-violet-500/20 bg-[#0f172a] text-white shadow-[0_0_80px_rgba(168,85,247,0.18)] sm:max-w-3xl p-5">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-2xl mb-2">
                        <BarChart3 className="size-6 text-violet-400" />
                        <div>
                            <h1 className="text-2xl font-bold tracking-wide
                                bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]">
                                Analytics Overview
                            </h1>
                        </div>
                    </DialogTitle>
                    <hr />
                </DialogHeader>

                <div className="space-y-6 mt-4">
                    <div className="grid gap-4 md:grid-cols-3">
                        {stats.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                                    rounded-3xl border border-white/10 p-5
                                    hover:border-violet-500/30 bg-white/5 hover:bg-violet-400/10
                                    hover:shadow-[0_0_25px_rgba(168,85,247,0.08)]
                                    transition-all duration-300
                                    ">
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-sm text-slate-400">
                                            {item.title}
                                        </span>

                                        <div className="rounded-xl bg-violet-500/20 p-2 text-violet-300">
                                            <Icon className="size-5" />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold">{item.value}</h3>
                                </div>
                            );
                        })}
                    </div>

                    <div className="rounded-3xl border border-violet-500/30 bg-violet-400/10 shadow-[0_0_25px_rgba(168,85,247,0.08)] p-6">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold">
                                Student Enrollment Trend
                            </h3>

                            <p className="text-sm text-slate-400">
                                Monthly student growth overview
                            </p>
                        </div>

                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={analyticsData}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#ffffff10"
                                    />

                                    <XAxis
                                        dataKey="month"
                                        stroke="#94a3b8"
                                    />

                                    <Tooltip />

                                    <Line
                                        type="monotone"
                                        dataKey="students"
                                        stroke="#a855f7"
                                        strokeWidth={3}
                                        dot={{ r: 4 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AnalyticsDialog;