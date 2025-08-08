import { CoverImagePost } from "../coverImagePost";
import { ContentPosts } from "../contentPosts";
import {
  formatteDateTime,
  formattedDateTimeToNow,
} from "@/utils/formattedDateTime";
import { findAllPublishedPosts } from "@/lib/cache/findAllPublishedPosts";

export async function FeaturedPost() {
  const posts = await findAllPublishedPosts();

  const post = posts[0];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 group mb-24">
      <CoverImagePost
        ImageProps={{
          alt: post.title,
          src: post.coverImageUrl,
          width: 1200,
          height: 720,
          priority: true,
          title: post.title,
        }}
        LinkProps={{
          href: "#",
        }}
      />
      <ContentPosts
        as="h1"
        date={formattedDateTimeToNow(post.createdAt)}
        text={post.content}
        title={formatteDateTime(post.createdAt)}
        author={post.author}
        heading={post.title}
      />
    </section>
  );
}
