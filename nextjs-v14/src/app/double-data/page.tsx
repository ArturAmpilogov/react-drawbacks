import Poem from "./poem";
import ClientComponentWrapper from "./client-component-wrapper";
import ElephantIcon from "@/ui/components/icons/elephant-icon";

export default function DoubleDataPage() {
  return (
    <main className="min-h-screen grid grid-cols-[250px_1fr]">
      <aside className="text-red-50 text-3xl bg-blue-950 p-4 ">Sidebar</aside>
      <article className="bg-slate-50 p-4 text-gray-950 relative">
        <TwoElephants />
        <ClientComponentWrapper>
          <Poem />
        </ClientComponentWrapper>
      </article>
    </main>
  );
}

const TwoElephants = () => {
  return (
    <div className="mb-4 flex gap-4">
      <ElephantIcon width={64} height={64} />
      <ElephantIcon width={64} height={64} />
    </div>
  );
};
