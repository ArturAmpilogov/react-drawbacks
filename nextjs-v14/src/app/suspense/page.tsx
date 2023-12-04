import Spinner from "@/ui/components/spinner";
import { Suspense, lazy } from "react";

const LazyPost = lazy(() => import("./post"));

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-[250px_1fr]">
      <aside className="text-red-50 text-3xl bg-blue-950 p-4 ">Sidebar</aside>
      <article className="bg-slate-50 p-4 text-gray-950">
        <div className="text-3xl mb-10">Article</div>
        <Suspense fallback={<Spinner />}>
          <LazyPost />
        </Suspense>
      </article>
    </main>
  );
}
