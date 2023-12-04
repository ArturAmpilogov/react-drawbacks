import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl mb-10">Demo</h1>

      <ul className="list-disc list-outside ml-6">
        <li>
          <Link className="text-blue-600" href="/suspense">Suspense</Link>
          <p className="mt-2 text-sm text-gray-800">
            Suspense is used with lazy loading. React will stream the content by
            parts: layout first, and then suspended components. This is called
            partial streaming and requires JavaScript.
            <br />
            Also react will hydrate the suspended content on client once it is
            received.
          </p>
        </li>
      </ul>
    </main>
  );
}
