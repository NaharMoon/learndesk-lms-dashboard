import { ReactNode } from "react";

import AppSidebar from "./AppSidebar";
import Topbar from "./Topbar";

interface AppShellProps {
  children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <main className="h-screen overflow-hidden bg-slate-950 text-white">
      <section className="mx-auto flex h-full w-full md:w-11/12 gap-10 px-4 py-5 lg:px-6">
        <AppSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />

          <div className="mt-6 min-w-0 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppShell;