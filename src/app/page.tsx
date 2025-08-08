import { FeaturedPost } from "@/components/content/featuredPost";
import Posts from "@/components/content/posts";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <FeaturedPost />
      <Suspense>
        <Posts />
      </Suspense>
    </>
  );
}
