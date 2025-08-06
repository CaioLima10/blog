import { postRepository } from "@/repositories/posts/json-post-repository";

export default async function Posts() {
  const posts = await postRepository.findAll();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.author}</div>
      ))}
    </div>
  );
}
