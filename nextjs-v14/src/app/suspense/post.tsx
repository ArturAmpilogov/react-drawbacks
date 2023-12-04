import Spinner from "@/ui/components/spinner";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getPost() {
  await delay(2000);
  return {
    id: 1,
    title: "Post 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc e",
  };
}

export default async function Post() {
  const post = await getPost();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-8 text-2xl">{post.text}</p>
    </div>
  );
}
