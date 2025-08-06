import { Container } from "@/components/container";
import { FeaturedPost } from "@/components/content/featuredPost";
import { Header } from "@/components/content/header";
import Posts from "@/components/content/posts";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />
      <FeaturedPost />
      <Suspense>
        <Posts />
      </Suspense>
    </Container>
  );
}
