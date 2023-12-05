import Poem from "./table/table";
import ClientComponent from "./client-component";

export default function DoubleDataPage() {
  return (
    <main className="min-h-screen grid grid-cols-[250px_1fr]">
      <aside className="text-red-50 text-3xl bg-blue-950 p-10">Sidebar</aside>
      <article className="bg-slate-50 text-gray-950 p-10">
        <ClientComponent />
      </article>
    </main>
  );
}
