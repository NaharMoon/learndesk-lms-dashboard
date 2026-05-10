import HeroSection from "@/components/dashboard/HeroSection";
import RecentActivity from "@/components/dashboard/RecentActivity";
import StatsCards from "@/components/dashboard/StatsCards";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <HeroSection />

      <StatsCards />

      <RecentActivity />
    </div>
  );
};

export default DashboardPage;