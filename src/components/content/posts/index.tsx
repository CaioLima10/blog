import { CoverImagePost } from "../coverImagePost";
import { ContentPosts } from "../contentPosts";
import {
  formatteDateTime,
  formattedDateTimeToNow,
} from "@/utils/formattedDateTime";
import { findAllPublishedPosts } from "@/lib/cache/findAllPublishedPosts";

export default async function Posts() {
  const posts = await findAllPublishedPosts();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {posts.slice(1).map((post) => (
        <div
          className="flex flex-col object-center object-cover group justify-center"
          key={post.id}
        >
          <CoverImagePost
            ImageProps={{
              title: post.title,
              alt: post.title,
              src: post.coverImageUrl,
              width: 300,
              height: 300,
            }}
            LinkProps={{
              href: `/post/${post.slug}`,
            }}
          />
          <div>
            <ContentPosts
              as="h2"
              date={formattedDateTimeToNow(post.createdAt)}
              text={post.content}
              heading={post.title}
              title={formatteDateTime(post.createdAt)}
              author={post.author}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
