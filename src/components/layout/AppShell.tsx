import { ReactNode } from "react";

import AppSidebar from "./AppSidebar";
import Topbar from "./Topbar";

interface AppShellProps {
  children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <section className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-5 lg:px-6">
        <AppSidebar />

        <div className="min-w-0 flex-1">
          <Topbar />

          <div className="mt-6 min-w-0">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppShell;