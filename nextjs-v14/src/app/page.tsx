import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl mb-6">Demo</h1>

      <ul className="list-disc list-outside ml-6 space-y-4">
        <li>
          <Link className="text-blue-600 underline" href="/suspense">
            Suspense
          </Link>
          <p className="my-2 text-sm text-gray-800">
            Suspense is used with lazy loading. React will stream the content by
            parts: layout first, and then suspended components. This is called
            partial streaming and requires JavaScript.
          </p>
        </li>
        <li>
          <Link className="text-blue-600 underline" href="/double-data">
            Double data
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 underline" href="/tree-rerender">
            Tree rerender
          </Link>
        </li>
      </ul>
    </main>
  );
}
