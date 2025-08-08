import { postRepository } from "@/repositories/posts/json-post-repository";
import { cache } from "react";

export const findAllPublishedPosts = cache(async () => {
  return await postRepository.findAllPublished()
})