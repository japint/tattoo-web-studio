import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <div className="p-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No posts available</p>
      )}
    </div>
  );
}
