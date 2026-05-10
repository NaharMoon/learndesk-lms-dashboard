import { ReactNode } from "react";

import AppSidebar from "./AppSidebar";
import Topbar from "./Topbar";

interface AppShellProps {
  children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-7xl gap-6 px-4 py-6 lg:px-6">
        <AppSidebar />

        <div className="flex-1">
          <Topbar />

          <div className="mt-6">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppShell;