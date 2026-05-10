import StudentsTable from "@/components/students/StudentsTable";

const StudentsPage = () => {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Students
        </h1>

        <p className="mt-2 text-slate-400">
          Track student engagement and learning progress.
        </p>
      </div>

      <StudentsTable />
    </section>
  );
};

export default StudentsPage;