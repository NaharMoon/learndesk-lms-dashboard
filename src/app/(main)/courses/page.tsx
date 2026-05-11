import CourseTable from "@/components/courses/CourseTable";

const CoursesPage = () => {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="font-heading text-4xl font-bold tracking-wide
           bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]">
          All Courses
        </h1>

        <p className="mt-2 text-slate-400">
          Manage all courses and completion progress.
        </p>
      </div>

      <CourseTable />
    </section>
  );
};

export default CoursesPage;